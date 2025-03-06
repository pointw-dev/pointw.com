# authparser

> Used to parse http Authentication headers, and to call handlers per scheme.
> Fully compliant with [RFC7235](https://www.rfc-editor.org/rfc/rfc7235).

<portfolio-repos name="authparser" github pypi />

How do clients authenticate with your web service?  Typically, this is by way of the `Authorization:` header, for example:

```text
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoyfQ.nMoAK-oiZTdVT0CcGhgS5yCscaNSf49BYFR3DiGT3tM
```

This uses the `Bearer` scheme, common when using OAuth ([RFC6750](https://www.rfc-editor.org/rfc/rfc6750)).  

What if you also want to handle `Basic` ([RFC7617](https://www.rfc-editor.org/rfc/rfc7617)), or `Digest` ([RFC7616](https://www.rfc-editor.org/rfc/rfc7616))?  You will need a way to parse the `Authorization` header and dispatch to your handler:
* process the JWT for `Bearer`
* base64 decode for `Basic`
* send the challenge response for `Digest`

Parsing the `Authorization:` header is no simple task.  That's where `authparser` comes in.

This library began as my answer to a question on [StackOverflow](https://stackoverflow.com/a/52462292/1155004)
