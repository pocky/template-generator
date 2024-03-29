# Template generator

Generate templates for different kind of projects through bash.

## Why?

I work on different kind of projects:

- Symfony application
- Symfony bundles
- Sylius plugins
- raw projects

With multiple license:

- AGPLv3
- EUPLv1.2
- MIT
- Double license

On Github and Gitlab.

And handle multiples repository templates is a pain :D

## Installation

- Clone this project
- You __MUST__ have [jq](https://github.com/stedolan/jq) on your system
- Profit!

## Usage

Output `./generator --help`

```bash
usage: ./generator [options]

options:
  --name=<name>: name of project
  --project=<project>: target project (blank, html, php-library, sylius-plugin)
  --license=<license>: license (AGPLv3, EUPLv1.2, GPLv3, MIT)
  --repository=<repository>: repository (gitlab, github)
  --update: update your templates

All invalid options are silently ignored!
```

An extra file `data.json.dist` is available for custom data. Rename this file to `data.json` for more automation!

## Contributing

See the [CONTRIBUTING]({docs.path}/CONTRIBUTING.md) file.

## Code of conduct

Be nice and take a look on our [CODE OF CONDUCT]({docs.path}/CODE_OF_CONDUCT.md).

## Support

This project is open source and this is our [support rules]({docs.path}/SUPPORT.md).

## License

tl;dr:

- Modifications must be shared,
- A commercial license is available.

This project is licensed under AGPL-3.0. This license implies that if you modify
this project, you must share those modifications. However, the AGPL-3.0 license applies only on this project.

If you don't want to follow this or do not want to use AGPL-3.0 licensed software,
you must buy commercial licenses. Contact us for more information.

## Credits

Created by [Alexandre Balmes](https://alexandre.balmes.co).
See also the [thank you]({docs.path}/thank-you.md).
