# hypermea-negotiable-auth

> An advanced yet easy to use auth module for APIs built using [hypermea](https://github.com/pointw-dev/hypermea) or [Eve](https://docs.python-eve.org/en/stable/).

<portfolio-repos name="hypermea-negotiable-auth" github pypi />

With `hypermea-negotiable-auth` your API can handle any authentication schemes that comply with [RFC7235](https://www.rfc-editor.org/rfc/rfc7235).  This is convenient even with a single scheme - but really shines if your services need to respond to multiple schemes.

This is already baked into hypermea when you use the auth addin:

```bash
hypermea api create my-service --add-auth
```

or if you've already created your service:

```bash
hypermea api addin --add-auth
```

The [GitHub README.md](https://github.com/pointw-dev/hypermea-negotiable-auth) file has details to integrate this library with a non-hypermea Eve based API.
