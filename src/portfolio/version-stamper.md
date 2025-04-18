# Version Stamper

> Manage/sync version numbers across all files that contain it, including git tags - from a single source of truth.

<portfolio-repos name="version-stamper" github npm />

Some projects have version numbers in multiple files, e.g. `package.json` or `setup.py`, on a documentation page, etc.

With version stamper, you set the version number in one place (`version_stamp.json`), configure which files need the version number.  

For example, our [halchemy](https://github.com/pointw-dev/halchemy) library contains packages for Python, Node, and Ruby (more coming in the roadmap!).  To keep all of these packages in sync, the `version_stamp.json` for halchemy looks like this:

```json
{
    "version": "1.0.3",
    "files": [
        {
            "path": "./node/halchemy/package.json",
            "pattern": "^  \"version\": \"{version}\","
        },
        {
            "path": "./node/halchemy/package-lock.json",
            "pattern": "^  \"version\": \"{version}\","
        },
        {
            "path": "./python/version.py",
            "pattern": "VERSION = '{version}'"
        },
        {
            "path": "./ruby/halchemy/lib/halchemy/version.rb",
            "pattern": "VERSION = \"{version}\""
        }
    ]
}
```

Then when you change the version number all you do is:

```bash
stamp --set 1.0.4
```

This updates `version_stamp.json` (the single source of truth for the version) then applies the version number to all files configured.

After you commit your code with the updated version number, you can easily tag the commit with:

```bash
stamp --tag
git push --tags
```
