# views-cli

一个前端视图工具

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Codecov Status][codecov-image]][codecov-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![Gratipay][licensed-image]][licensed-url]

## Installation
With npm do:
```bash
npm install -g views-cli
```

## Usage

```bash
$ views -h

  Usage: views [options] [command]                                                                                                
                                                                                                                                
                                                                                                                                
  Commands:                                                                                                                     
                                                                                                                                
    init [dir]  initialize a front view                                                                                         
                                                                                                                                
  Options:                                                                                                                      
                                                                                                                                
    -h, --help     output usage information                                                                                     
    -V, --version  output the version number
```

Create A Project
```bash
$ views init app-name
```

Initialize A Project
```bash
$ cd app-name && views init
```

## Test

```bash
$ npm run test
```

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).


[npm-image]: https://img.shields.io/npm/v/views-cli.svg
[npm-url]: https://www.npmjs.org/package/views-cli
[downloads-image]: https://img.shields.io/npm/dm/views-cli.svg
[downloads-url]: https://npmjs.org/package/views-cli
[travis-image]: https://travis-ci.org/kenode/views-cli.svg?branch=master
[travis-url]: https://travis-ci.org/kenode/views-cli
[codecov-image]: https://img.shields.io/codecov/c/github/kenode/views-cli/master.svg
[codecov-url]:   https://codecov.io/github/kenode/views-cli?branch=master
[dependencies-image]: https://david-dm.org/kenode/views-cli/status.svg
[dependencies-url]: https://david-dm.org/kenode/views-cli
[licensed-image]: https://img.shields.io/badge/license-MIT-blue.svg
[licensed-url]: ./LICENSE