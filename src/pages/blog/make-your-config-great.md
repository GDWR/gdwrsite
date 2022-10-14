---
layout: "../../layouts/BlogPost.astro"
title: "Make Your Config Great"
publishDate: ""
draft: True
heroImage: "/images/config-python.png"
---

When creating software that is expected to be run in multiple environments it is commonplace to use environment variables[^1] and/or `settings.json` to hold your configuration. Doing so allows for users and/or engineers to define the differences between each of these environments, such as where a database the software will use is located with its login details. 

[^1]: [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are OS-level variables that can be read from applications running on that device. This allows for other languages and programs to interact with the configuration of a system without parsing and updating files. Generic program languages such as [C#](https://docs.microsoft.com/en-us/dotnet/api/system.environment.getenvironmentvariable?view=net-6.0), [Java](https://docs.oracle.com/javase/tutorial/essential/environment/env.html) and [Python](https://docs.python.org/3/library/os.html#os.environ) have builtin modules to make it easy for developers to access these variables.

Within Python, we see a few different ways that developers have decided to tackle the issue of configuration. Let us take a look at some popular Pythoncentric applications.

# Sentry

- https://github.com/lutris/lutris/blob/master/lutris/config.py
- https://github.com/ansible/ansible/blob/devel/lib/ansible/config/manager.py
- https://github.com/getsentry/sentry/tree/master/src/sentry/conf
- https://github.com/3b1b/manim/blob/master/manimlib/config.py

## Defined in source
```py
# config.py

DATABASE_HOST = "127.0.0.1"
DATABASE_USER = "gdwr"
DATABASE_PASSWORD = "very-secure"
DATABASE_PORT = 5432
```

## From a file
```py
import json

with open("./settings.json", "r") as f:
    __RAW_SETTINGS = json.loads(f.read)

DATABASE_HOST = __RAW_SETTINGS["DATABASE_HOST"]
DATABASE_USER = __RAW_SETTINGS["DATABASE_USER"]
DATABASE_PASSWORD = __RAW_SETTINGS["DATABASE_PASSWORD"]
DATABASE_PORT = __RAW_SETTINGS.get("DATABASE_PORT", 5432)
```

## From environment variables
```py
# config.py
from os import environ

DATABASE_HOST = environ["DATABASE_HOST"]
DATABASE_USER = environ["DATABASE_USER"]
DATABASE_PASSWORD = environ["DATABASE_PASSWORD"]
DATABASE_PORT = environ.get("DATABASE_PORT", 5432)
```

