---
title: Количество строк кода в Django-проекте
date: 2015-01-20
layout: layouts/post.njk
---
Составил недавно небольшую команду для подсчета количества строчек полезного (более или менее) кода в своих Django-проектах.

```bash
    git ls-files | grep .py | grep -vE '(migrations|__init__|staticfiles|layout)' | xargs cat | grep -v ^\s*$ | wc -l
```

Коротко про команду: берем все гитовые файлы с расширением `.py`, исключаем файлы с ключами `migrations`, `__init__`, `staticfiles`, `layout` в названии, после чего уже внутри самих файлов считаем все не пустые строчки.
