---
title: How GitHub uses GitHub to develop and deploy GitHub
date: 2016-10-21
layout: '../../layouts/BaseLayout.astro'
---
So, the talk was from Johannes Nicolai from Enterprise Solutions Engineering team. There were almost no marketing stuff, but about their inner structure and flow.

Company-wise they have around 600 people, half of them working remotely from everywhere, half of them based in San Francisco. And they are operating the 51st popular website on the internet.

They are doing everything over GitHub, like literally everything. Marketing, finance, legal and agreements teams all using only GitHub and markdown for issues, documents reviewing and stuff. They all against email - want to be everything documented on GitHub, so if in case it could be pointed to right issue or discussion.

An interesting thing - even for documents and non-code repositories, they have different CI checks and linters, for example for the blog they have text errors, buzzwords, passive-aggressive style checks (around 10-16 different linters only for text).


They are doing around 500 deploys per week. All devops stuff - deployments, metrics, changing some devops configurations, increasing limits they are doing via hubot in Slack. If something is going wrong, for example, DDoS, online team is talking about it and doing some performance checks and fixes right in Slack commands - that helps to see in the future what happened and what was done to check it and to fix it (also helps other people to learn how to be in that kind of situations).

GitHub's engineers have deployment timeline - you can see if there were increased errors rate or some spikes, you see after which PRs that happened, who made it, who fixed it.

If you want to deploy your feature (from feature-branch only), you are queuing up for it in Slack, hubot will notify when you can deploy a feature, notify where you can deploy it and here you go. If you’re ready for production, first your branch goes for canary-production (for a small part of the servers), then after 5-15 minutes, it goes for all servers. Only after that, your branch is merged to main. :)

Also, they are actively using feature-flags, so deployed features they can turn on for themselves/certain teams/some repositories/part of end users.


#### Some useful links:

- [FutureStack15: Changing the Laws of Engineering with Pull Requests (talk from New Relic)](https://www.youtube.com/watch?v=YIpNpptGX6Q)
- [Hubot - chatops bot used in GitHub](https://hubot.github.com/)
- [GitHub Engineering Blog](https://githubengineering.com/)
- [Package for feature-flags](https://github.com/jnunemaker/flipper)
