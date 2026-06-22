---
title: Safer local envs with 1Password and op run
date: 2026-06-18
description: Using 1Password secret references and a tiny shell helper to reduce plaintext secret sprawl in local development.
---

I kept too many secrets in my `.env` files.

The goal: run local commands without keeping sensitive environment variables in plaintext inside the project directory.

This led me to looking for ways to be protected against:

- supply-chain attacks: a random dependency or tool reading local files;
- agentic workflows: coding agents accidentally seeing or exposing secrets from the workspace.

I already use a password manager for secrets. In my case, that is 1Password, and like many password managers it has a CLI integration.

The CLI can read items from your vault and pass them to local commands without you copying values around. The part I care about here is `op run`: it can start a process with environment variables resolved from 1Password.

That means I can keep the local `.env` workflow, but stop putting real secret values in the file:

```env
SECRET_KEY=op://dev/project/SECRET_KEY
DATABASE_URL=op://dev/project/DATABASE_URL
```

Then `op run` resolves those pointers only for the command it starts:

```sh
op run --env-file .env -- uv run manage.py runserver
```

A nice side effect: reading the real values goes through 1Password. If something unexpected tries to resolve them, I get an unlock prompt first, which gives me a chance to stop and ask: "did I actually mean to give this command my secrets?"

![1Password unlock prompt](https://github.com/user-attachments/assets/d5f86e6d-bb04-4bd0-ad06-933dd6b333db)

That is already enough, but I did not want to type the full command every time, so I wrapped it in a tiny zsh helper:

```zsh
opr() {
  op run --env-file "${OP_ENV_FILE:-.env}" -- "$@"
}
```

Now I can run my Django server like this:

```sh
opr uv run manage.py runserver
```

or a FastAPI app:

```sh
opr fastapi dev
```

The process still gets the environment it needs, but the secrets are managed by 1Password instead of sitting casually in the repository/worktree.

## Advanced: aliases

I am also quite lazy and like [aliases](/notes/2019-03-15-heroku-aliases/), so I wanted this to work too:

```zsh
alias runserver="uv run manage.py runserver"
opr runserver
```

The minimal `opr` helper does not support that, because shell aliases are not executables. `op run` tries to execute `runserver` as a real command from `$PATH`.

To make `opr` understand zsh aliases too, I expand the first argument before calling `op run`:

```zsh
opr() {
  local env_file="${OP_ENV_FILE:-.env}"
  local -a cmd expanded
  local expansions=0

  cmd=("$@")
  while (( $#cmd > 0 && ${+aliases[$cmd[1]]} && expansions < 20 )); do
    expanded=(${(z)aliases[$cmd[1]]})
    cmd=("${expanded[@]}" "${cmd[@]:1}")
    ((expansions++))
  done

  op run --env-file "$env_file" -- "${cmd[@]}"
}
```

Then the lazy version works:

```sh
opr runserver
```

## Alternatives

This helper is intentionally tiny. If you are interested in the idea, but did not like my solution or want something more production-like, here are some alternatives:

- [dotenvx](https://github.com/dotenvx/dotenvx), which supports encrypted `.env` workflows and stays close to the familiar dotenv model.
- [Varlock](https://github.com/dmno-dev/varlock), which adds a committed `.env.schema`, type/required metadata, redacted config checks, and secret leak scanning.
- [git-secret](https://sobolevn.me/git-secret/), which encrypts secret files before committing them to Git. Useful, but a different trade-off: after decrypting, you still have plaintext files in the worktree.

Devcontainers can also help by isolating the tooling that touches a project, but they do not remove the secrets problem by themselves: the container still needs those values from somewhere.

These are bigger tools than my alias, but that can be the right trade-off for a team, especially if you want an explicit env contract for humans and agents.

None of this protects you from code running inside the target process: that code can read its own environment. The win is smaller than that, but still useful: fewer plaintext secrets sitting around for tools, agents, or accidental commits to stumble over.

I would not add this to every project by default. It is most useful when the same checkout is touched by lots of tools, scripts, or agents.
