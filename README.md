# eslint-config-not-an-aardvark [![Build Status](https://travis-ci.org/not-an-aardvark/eslint-config.svg?branch=master)](https://travis-ci.org/not-an-aardvark/eslint-config)

This is a shareable ESLint config for my personal JavaScript code style preferences.

### Installation

```bash
npm install eslint eslint-config-not-an-aardvark --save-dev
```

### Requirements

* Node.js 4+
* ESLint 3.9.1+

### Usage

Add the following to your `.eslintrc.json` file:

```json
{
  "extends": ["not-an-aardvark"]
}
```

Or alternatively, for projects that don't use ES2015:

```json
{
  "extends": ["not-an-aardvark/es5"]
}
```

### Development

To install:

```bash
git clone https://github.com/not-an-aardvark/eslint-config.git
cd eslint-config/
npm install
```

To run the tests:

```bash
npm test
```

### Contributing

See [CONTRIBUTING.md](https://github.com/not-an-aardvark/eslint-config/blob/master/CONTRIBUTING.md).

### License

This project is freely distributable under the [MIT License](https://github.com/not-an-aardvark/eslint-config/blob/master/LICENSE.md).
