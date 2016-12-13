# Changelog

## v2.0.0 (2016-12-13)

* Breaking: enable object-curly-spacing: always ([e9d6589](https://github.com/not-an-aardvark/eslint-config/commit/e9d65898ed52cab34c9f0ad2aef7c55e70cafdb5))
* Breaking: enable comma-dangle: always-multiline ([aaede69](https://github.com/not-an-aardvark/eslint-config/commit/aaede69cecf10d0707808aa773e39e37b3a43efe))
* Chore: add an npm script to run the linter ([763fe8b](https://github.com/not-an-aardvark/eslint-config/commit/763fe8b52912647b8065919f9ac22927ba1279d5))
* Chore: lint all the files in the package ([77a9a42](https://github.com/not-an-aardvark/eslint-config/commit/77a9a42bee075175b06ebf8d5b7bd851f72a5870))
* Docs: document the node-specific config ([daf8770](https://github.com/not-an-aardvark/eslint-config/commit/daf877011258d7a25ff3514a1c3e12a264fb0aff))

## v1.1.0 (2016-11-17)

* Update: move files out of the lib/ folder for easier require() access ([2c97ed5](https://github.com/not-an-aardvark/eslint-config/commit/2c97ed5b89ff97acc846472deb44c6307495b5f5))
* Fix: ensure node config is included in build ([f52492b](https://github.com/not-an-aardvark/eslint-config/commit/f52492bda10f27f3a58a934e423761b02c25389c))
* New: add node-specific config ([6e9948c](https://github.com/not-an-aardvark/eslint-config/commit/6e9948c30d57655aa8fe352a03af4960bc3740ea))
* Build: Prevent greenkeeper's PRs from failing commit message check ([1b05fa2](https://github.com/not-an-aardvark/eslint-config/commit/1b05fa2a1044c28f9a0ee7ae540f7712a4390a97))
* Chore: name functions consistently in build script ([2fde01b](https://github.com/not-an-aardvark/eslint-config/commit/2fde01bf22a2deeacddd1ee3806a813d7b41023d))
* Build: clear out node_modules before running the build script ([888cf83](https://github.com/not-an-aardvark/eslint-config/commit/888cf836e557d2700e04e8f9d2a332637b8036e8))
* Build: Throw an error in the build script if there are no new commits ([f0622a8](https://github.com/not-an-aardvark/eslint-config/commit/f0622a8bc451004c25d2d781d13403d4eb437d59))
* Chore: only validate the length of the first line of the commit message ([88191f7](https://github.com/not-an-aardvark/eslint-config/commit/88191f756022e07b1436833dc5c94d0eb9b3a42b))
* Fix: don't remove trailing newline from package.json in the build script ([151aefd](https://github.com/not-an-aardvark/eslint-config/commit/151aefd1b0d58062056a067e50eb7a47db0a9bc9))
* Build: create a script to automate releases ([d2d6619](https://github.com/not-an-aardvark/eslint-config/commit/d2d66199b218dbb842a2382cb22ca05e6b1068b6))
* Chore: ensure files in tests/ are linted ([25838eb](https://github.com/not-an-aardvark/eslint-config/commit/25838eb9d31ead381ac834593b38abc456b1863b))
* Fix: ensure the files in lib/ are published ([5c82c2d](https://github.com/not-an-aardvark/eslint-config/commit/5c82c2dbfa904889e97b14082d4658bbf0ecdec6))
* Chore: move lib files out of root directory ([6f483a9](https://github.com/not-an-aardvark/eslint-config/commit/6f483a91c3f07231bb169ab137b5179da56e95a1))
* Chore: add tests for commit messages ([c7f43c5](https://github.com/not-an-aardvark/eslint-config/commit/c7f43c5b4d4f48ba8b931f0e6332ea5e4158d994))
* Chore: separate build tests into a different file ([306dd55](https://github.com/not-an-aardvark/eslint-config/commit/306dd552c12ea5fad614b824802ba99f8352e501))

## v1.0.1 (2016-11-02)

* Chore: add eslint-plugin-node internally
* Fix: nonexistent "main" entry in package.json

## v1.0.0 (2016-11-02)

* New: Initial commit
