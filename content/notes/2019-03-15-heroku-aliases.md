---
title: Heroku CLI aliases
date: 2019-03-17
layout: '../../layouts/BaseLayout.astro'
description: Useful bash aliases for Heroku CLI commands to streamline app management, addon access, and Django-specific operations.
---

Heroku has nice and powerful [CLI](https://devcenter.heroku.com/articles/heroku-cli), which I am using quite heavily for company and personal stuff almost every day.

Very often I need to log in to one of my apps or to the addons, but default commands are very verbose, so here are my shorter aliases:

```bash
# Heroku
alias heroku-login="heroku login"
alias heroku-logs="heroku logs -t"
alias heroku-bash="heroku run bash"

## Addons
alias heroku-cloudamqp="heroku addons:open cloudamqp"
alias heroku-newrelic="heroku addons:open newrelic"
alias heroku-scheduler="heroku addons:open scheduler"
alias heroku-librato="heroku addons:open librato"
alias heroku-logentries="heroku addons:open logentries"
alias heroku-connect="heroku addons:open herokuconnect"

## Django-related
alias heroku-shell-plus="heroku run python manage.py shell_plus"
alias heroku-dbshell="heroku run python manage.py dbshell"
```
