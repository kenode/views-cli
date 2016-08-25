# views-cli

[![Version](http://img.shields.io/npm/v/views-cli.svg)](https://www.npmjs.org/package/views-cli)
[![Build Status](https://travis-ci.org/kenode/views-cli.svg?branch=master)](https://travis-ci.org/kenode/views-cli)
[![dependencies Status](https://david-dm.org/kenode/views-cli/status.svg)](https://david-dm.org/kenode/views-cli)
[![Coverage Status](https://img.shields.io/codecov/c/github/kenode/views-cli/master.svg)](https://codecov.io/github/kenode/views-cli)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

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