---
title: Safer local envs with 1Password and op run
date: 2026-05-05
description: Using 1Password secret references and a tiny shell helper to reduce plaintext secret sprawl in local development.
---

TIL: `op run` can make local development secrets a little less ambient.

I wanted a safer way to run local commands without keeping all sensitive environment variables in plaintext `.env` files inside a project directory.

The threat model was not perfect security. It was reducing easy leaks from:

- supply-chain attacks: a random dependency or tool reading local files;
- agentic workflows: coding agents accidentally seeing or exposing secrets from the workspace.

The nice trick: keep a local `.env` file, but make it contain 1Password secret references instead of plaintext secrets:

```env
SECRET_KEY=op://dev/project/SECRET_KEY
DATABASE_URL=op://dev/project/DATABASE_URL
```

Then use the 1Password CLI to resolve those references only when running a command.

I wrapped it in a tiny zsh helper:

```zsh
opr() {
  op run --env-file "${OP_ENV_FILE:-.env}" -- "$@"
}
```

Now I can run my Django server like this:

```sh
opr uv run manage.py runserver
```

The process still gets the environment it needs, but the secrets are managed by 1Password instead of sitting casually in the repository/worktree.

For FastAPI:

```sh
opr uv run uvicorn app.main:app --reload
```

or, depending on your project layout:

```sh
opr uv run fastapi dev app/main.py
```

## Advanced: aliases

One gotcha: shell aliases are not executables.

This works in the shell:

```zsh
alias runserver="uv run manage.py runserver"
runserver
```

But this does not work with the minimal `opr` helper:

```sh
opr runserver
```

because `op run` tries to execute `runserver` as a real command from `$PATH`.

If you want `opr` to understand zsh aliases too, you can expand the first argument before calling `op run`:

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

## Alternatives

This helper is intentionally tiny. Nearby options include:

- [`dotenvx`](https://github.com/dotenvx/dotenvx), which supports encrypted `.env` workflows and stays close to the familiar dotenv model.
- [Varlock](https://github.com/dmno-dev/varlock), which adds a committed `.env.schema`, type/required metadata, redacted config checks, and secret leak scanning.

Those add more tool surface area, but can be worth it when you want a stronger team workflow or an explicit env contract for humans and AI agents.

This does not protect against code running inside the target process: that code can read its own environment. It mainly reduces workspace-level secret sprawl: fewer plaintext files for tools, agents, or accidental commits to stumble over.
