---
title: Making Django admin easier to use every day
date: 2026-10-30
description: A command palette, a search shortcut, and tabs for long forms make Django admin easier to use every day.
draft: true
---

We use Django admin quite heavily at [voiio](https://www.voiio.de/). Different teams use it every day, and most of its users are not engineers.

It is a wonderful tool, but after years of adding models, fields, and inlines, some things become annoying. Too many clicks to find a record, too much scrolling to change a setting.

I spend a lot of time there too, checking records and investigating bugs, so here are a few things I wanted to improve.

## Jump to a model or record

I tried [django-command-palette](https://github.com/rajasimon/django-command-palette) and liked it. It had an annoying bug that was spamming Sentry, but otherwise worked fine. I reported it and submitted a fix, but got no response.

I also noticed that quite often I would open a model's list with `Cmd+K`, then go to the address bar and add the ID by hand. I already knew which record I needed, so why not go there directly?

So I made [django-cmdbar](https://github.com/amureki/django-cmdbar). Now I can type `user#42` and open that record.

## Press `/` to search

This one is tiny, but I use it all the time. On admin list pages, we added `/` to focus the search field.

We also changed the placeholder so people can discover it:

> Type "/" to search

Press `/`, start typing. Saves me reaching for the mouse every time I need to search.

[django-admin-keyshortcuts](https://github.com/khanxmetu/django-admin-keyshortcuts) was another inspiration here, if you are interested in more keyboard shortcuts for the admin.

## Split long detail forms into tabs

One of our admin forms had grown to around 8–10 inlines. Finding one setting involved enough scrolling to count as exercise.

So we recently grouped related fields and inlines into tabs, inspired by [django-tabbed-admin2](https://pypi.org/project/django-tabbed-admin2/). General, Access, Staff comments, and so on. Now I can open Access and change what I need without scrolling through the rest of the form.

It is still the same form with the usual save button. Just much less scrolling.

## Tell environments apart

Another idea I liked: a [proposal to use different admin colors when `DEBUG=True`](https://github.com/django/new-features/issues/228). When several browser tabs show the same admin in different environments, it is quite easy to edit something in the wrong one.

I like Django admin a lot. And since it is another Django app, we can change the parts that annoy us. If your team spends hours there every day, it is worth spending some time making it better.
