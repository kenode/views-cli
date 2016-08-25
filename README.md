# views-cli

[![Build Status](https://travis-ci.org/kenode/views-cli.svg?branch=master)](https://travis-ci.org/kenode/views-cli)

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