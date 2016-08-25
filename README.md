# views-cli

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![Gratipay][licensed-image]][licensed-url]

一个前端视图工具

## Installation
With npm do:
```bash
npm install -g views-cli
```

## Usage

Create A Project
```bash
$ views init myProject
```

Initialize A Project
```bash
$ cd myProject && views init
```

Help
```bash
$ views -h

  Usage: views [options] [command]                                                                                                
                                                                                                                                
                                                                                                                                
  Commands:                                                                                                                     
                                                                                                                                
    init [dir]  initialize a front view                                                                                         
                                                                                                                                
  Options:                                                                                                                      
                                                                                                                                
    -h, --help     output usage information                                                                                     
    -V, --version  output the version number
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
[coverage-image]: https://img.shields.io/codecov/c/github/kenode/views-cli/master.svg
[coverage-url]: https://codecov.io/github/kenode/views-cli
[dependencies-image]: https://david-dm.org/kenode/views-cli/status.svg
[dependencies-url]: https://david-dm.org/kenode/views-cli
[licensed-image]: https://img.shields.io/badge/license-MIT-blue.svg
[licensed-url]: ./LICENSE