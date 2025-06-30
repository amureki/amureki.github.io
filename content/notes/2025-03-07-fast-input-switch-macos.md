---
title: Fast Input Switching on macOS (Sequoia)
date: 2025-03-07
description: How to eliminate the frustrating delay when switching input languages on macOS by swapping keyboard shortcuts in System Preferences.
---

For the longest time, switching input languages on my Mac was frustratingly slow.
The default *Control + Space* shortcut had a nearly **one-second delay** before switching languages.
If you're a fast typist, that means typing the first few characters in the wrong language — super annoying.

I tried every solution I could find:

- Custom AppleScripts.
- The unmaintained (but surprisingly still functional) open-source tool [Kawa](https://github.com/hatashiro/kawa).
- I even wrote my own Swift-based solution.

None of them fixed the actual problem — the **delay itself**.

## The Solution

After a lot of trial and error, I stumbled upon this in *System Preferences → Keyboard → Shortcuts -> Input Sources*:

![Input Sources](https://github.com/user-attachments/assets/4314b71d-a55b-4555-941c-660460e60916)

- The default shortcut for **"Select the previous input source"** (*Control + Space*) has a delay.
- The shortcut for **"Select next source in Input menu"** (*Control + Option + Space*) does *not* have a delay.

For whatever reason, Apple made the slower one the default. The fix?

**_Just swap the shortcuts._**

Now, the *Control + Space* shortcut switches input languages instantly, 
and the *Control + Option + Space* shortcut has the delay (who cares?).

## But why?

I still have questions:

- Why does the "previous" shortcut have a delay while the "next" one doesn’t?
- Why isn’t the faster shortcut the default?
- Is this a bug, a design choice, or just legacy behavior?

If you know the answer, I’d love to hear it.

## For Globe (🌐) icon lovers

In case you like are using Apple's keyboard with the Globe icon,
you may also experience a delay when switching input languages.
For you I found another hint:
In *System Preferences → Keyboard → Shortcuts -> Mission Control* you can disable the shortcut for "Quick Note" (🌐Q)
which can cause the delay if you just want to switch the input language.

![Mission Control](https://github.com/user-attachments/assets/c36fd69b-e05f-473b-93b5-75c8daf6f0a4)

Another example of some creativity ruining the user experience.

Keep calm and typing fast!
