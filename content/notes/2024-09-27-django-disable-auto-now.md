---
title: Disable `auto_now` and `auto_now_add` in Django migrations
date: 2024-09-27
description: How to temporarily disable Django's auto_now and auto_now_add behavior during migrations to preserve historical timestamps when migrating data.
---
# Disable `auto_now` and `auto_now_add` in Django migrations

Django's `DateField` and `DateTimeField` fields have two options that can be set to automatically set the field to the current date and time when a new record is created or updated:

- `auto_now`: Automatically sets the field to the current date and time every time the record is saved.
- `auto_now_add`: Automatically sets the field to the current date and time when the record is first created.

A common use case for these options is setting `created_at` and `updated_at` fields in a model:

```python
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

However, if you want to migrate some data you might stumble into a problem.

```python
from django.db import migrations, models

def create_old_article(apps, schema_editor):
    Article = apps.get_model('blog', 'Article')
    
    old_article = {
        'title': 'My old article',
        'created_at': '2020-01-01 12:00:00',
        'updated_at': '2024-01-01 12:00:00',
    }

    Article.objects.create(**old_article)

class Migration(migrations.Migration):
      dependencies = [
          ('blog', '0001_initial'),
      ]

      operations = [
          migrations.RunPython(create_old_article),
      ]
```

Running this migration would set `created_at` and `updated_at` to the current date and time, not the specified historical dates.

To preserve the historical dates during migration, you can temporarily disable the `auto_now` and `auto_now_add` behavior:

```python
...

def create_old_article(apps, schema_editor):
    Article = apps.get_model('blog', 'Article')
    
    old_article = {
        'title': 'My old article',
        'created_at': '2020-01-01 12:00:00',
        'updated_at': '2024-01-01 12:00:00',
    }

    # Disable the auto_now and auto_now_add behavior
    Article._meta.get_field('created_at').auto_now_add = False
    Article._meta.get_field('updated_at').auto_now = False

    Article.objects.create(**old_article)
    
    # Re-enable the `auto_now` and `auto_now_add` behavior 
    #  in case there are other operations within the migration
    Article._meta.get_field('created_at').auto_now_add = True
    Article._meta.get_field('updated_at').auto_now = True

...
```

This approach disables the automated logic for the duration of the migration, allowing the fields to be set to the specified values.

