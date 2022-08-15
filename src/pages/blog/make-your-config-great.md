---
layout: "../../layouts/BlogPost.astro"
title: "Make your config great"
description: "Currently in draft."
publishDate: "Aug 15 2022"
heroImage: "/images/markdown.png"
---

This post will be talking about settings/config management in the Python ecosystem. I will be contrasting the differences between other languages and frameworks, with my limited experience of them. If you wish to update and/or correct any details I have written about please make a [pull request here]()

When creating software that is expected to be ran in multiple environments it is commonplace to use environment variables[^1] and/or `settings.json`. Doing so allows for you to define the differences between each of these environments, such as where a database the software will use is located with it's login details. 

[^1]: [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are commonly accessible variables that can be accessed from the OS level. This allows for other languages and programs to interact with the configuration of a system without parsing and updating files. Generic program langauges suchs as C#, Java and Python have [builtin modules](https://docs.python.org/3/library/os.html#os.environ) to make it easy for developers to read these variables.

## `config.py` - defined in script
```python
# config.py

DATABASE_HOST = "127.0.0.1"
DATABASE_USER = "gdwr"
DATABASE_PASSWORD = "very-secure"
DATABASE_PORT = 5432
```

## `config.py` - from file
```python
import json

with open("./settings.json", "r") as f:
	__RAW_SETTINGS = json.loads(f.read)

DATABASE_HOST = __RAW_SETTINGS["DATABASE_HOST"]
DATABASE_USER = __RAW_SETTINGS["DATABASE_USER"]
DATABASE_PASSWORD = __RAW_SETTINGS["DATABASE_PASSWORD"]
DATABASE_PORT = __RAW_SETTINGS.get("DATABASE_PORT", 5432)
```

## `config.py` - from environment
```python
# config.py
from os import environ

DATABASE_HOST = environ["DATABASE_HOST"]
DATABASE_USER = environ["DATABASE_USER"]
DATABASE_PASSWORD = environ["DATABASE_PASSWORD"]
DATABASE_PORT = environ.get("DATABASE_PORT", 5432)
```

