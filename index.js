'use strict';

var program = require('commander');
var _ = require('lodash');

var pkg = require('./package.json');
var init = require('./libs/init')
var version = pkg.version;

program
  .version(version);

program
  .command('init [dir]')
  .description('initialize a front view')
  .action( function (dir, options){
    return init(dir);
  });

// Parse and fallback to help if no args
if (_.isEmpty(program.parse(process.argv).args) && process.argv.length === 2) {
  program.help();
}