---
title: Making Django admin easier to use every day
date: 2026-11-02
description: A command palette, a search shortcut, and tabs for long forms make Django admin easier to use every day.
---

Several teams at [voiio](https://www.voiio.de/) use Django admin every day. Most of its users are not engineers.

It is a wonderful tool, but after years of adding models, fields, and inlines, some things become annoying. Too many clicks to find a record, too much scrolling to change a setting.

I spend a lot of time there too, checking records and investigating bugs, so here are a few things I wanted to improve.

## Jump to a model or record

I tried [django-command-palette](https://github.com/rajasimon/django-command-palette) and liked it. It had an annoying bug that was spamming Sentry, but otherwise worked fine. I reported it and submitted a fix, but got no response.

I often opened a model's list with `Cmd+K`, then added the record ID to the URL by hand. I already knew which record I needed, so why not go there directly?

So I made [django-cmdbar](https://github.com/amureki/django-cmdbar). Now I can type `user#42` and open that record.

<figure>
  <a href="/images/django-admin-dx/cmdbar-record.png" target="_blank" rel="noopener" aria-label="Open full screenshot in a new tab: Django CmdBar showing user#42 with an option to open record #42.">
    <img src="/images/django-admin-dx/cmdbar-record.png" alt="Django CmdBar showing user#42 with an option to open record #42." width="2000" height="680" loading="lazy">
  </a>
  <figcaption>Type user#42 to jump straight to that record.</figcaption>
</figure>

I thought only power users would use this, but our non-technical colleagues liked it more than I expected.

## Press `/` to search

This one is tiny, but I use it all the time. On admin list pages, we added `/` to focus the search field.

We also changed the placeholder so people can discover it:

> Type "/" to search

<figure>
  <a href="/images/django-admin-dx/search-hint.png" target="_blank" rel="noopener" aria-label="Open full screenshot in a new tab: Demo book list with the search placeholder Type &quot;/&quot; to search.">
    <img src="/images/django-admin-dx/search-hint.png" alt="Demo book list with the search placeholder Type &quot;/&quot; to search." width="960" height="280" loading="lazy">
  </a>
  <figcaption>The search field shows the keyboard shortcut.</figcaption>
</figure>

I can press `/` and start typing without reaching for the mouse.

[django-admin-keyshortcuts](https://github.com/khanxmetu/django-admin-keyshortcuts) was another inspiration here, if you are interested in more keyboard shortcuts for the admin.

## Split long detail forms into tabs

One of our admin forms had grown to around 8–10 inlines. Finding one setting involved enough scrolling to count as exercise.

So we recently grouped related fields and inlines into tabs, inspired by [django-tabbed-admin2](https://pypi.org/project/django-tabbed-admin2/). A couple of admin classes and a JavaScript snippet were enough to build our own version.

It is still the same form with the usual save button, but we spend less time scrolling.

<figure>
  <a href="/images/django-admin-dx/admin-tabs.png" target="_blank" rel="noopener" aria-label="Open full screenshot in a new tab: Demo book form with Details, Authors, and Reviews tabs and sample data.">
    <img src="/images/django-admin-dx/admin-tabs.png" alt="Demo book form with Details, Authors, and Reviews tabs and sample data." width="960" height="590" loading="lazy">
  </a>
  <figcaption>Related fields are grouped into tabs. Demo form with sample data.</figcaption>
</figure>

After we added tabs to our heaviest admin page, staff members asked us to do the same for other long admin pages.

## Next: tell environments apart

Another idea I liked: a [proposal to use different admin colors when `DEBUG=True`](https://github.com/django/new-features/issues/228). When several browser tabs show the same admin in different environments, it is quite easy to edit something in the wrong one.

I haven't tried this yet, but I'd like to make our environments easier to tell apart.

---

I like Django admin a lot. And since it is another Django app, we can change the parts that annoy us. If your team spends hours there every day, it is worth spending some time making it better.
