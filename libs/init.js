'use strict';

var mkdirp = require('mkdirp');
var Promise = require('bluebird');
var util = require('util');
var Tools = require('./tools');
var InitProxy = require('./initproxy')
var fs = require('fs');
var path = require('path');

var _root;

module.exports = function (dir) {
  _root = dir ? null : process.cwd();
  var _dir = dir || process.cwd();
  InitProxy.mkdirAsync(dir, true)
    .then( function (doc) {
      if (doc.state === 1) {
        console.log('   create : ', doc.path, '=> Successful');
      }
      return InitProxy.mkdirAsync(_dir + '/assets', false);
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful');
      return InitProxy.mkdirAsync(_dir + '/assets/img', false);
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful');
      return InitProxy.mkdirAsync(_dir + '/assets/sass', false);
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful');
      return InitProxy.mkdirAsync(_dir + '/assets/sass/libs', false);
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful');
      copy_file('sass/base.scss', _dir + '/assets/sass/libs/base.scss');
      copy_file('sass/index.scss', _dir + '/assets/sass/index.scss');
      return InitProxy.mkdirAsync(_dir + '/jsondata', false);
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful');
      copy_file('jsondata/index.json', _dir + '/jsondata/index.json');
      return InitProxy.mkdirAsync(_dir + '/src', false);
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful');
      return InitProxy.mkdirAsync(_dir + '/src/components', false);
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful');
      copy_file('src/index.js', _dir + '/src/index.js');
      return InitProxy.mkdirAsync(_dir + '/views', false);
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful');
      return InitProxy.mkdirAsync(_dir + '/views/components', false);
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful');
      return InitProxy.mkdirAsync(_dir + '/views/layouts', false);
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful');
      copy_file('views/layouts/base.html', _dir + '/views/layouts/base.html');
      copy_file('views/index.html', _dir + '/views/index.html');
      return InitProxy.mkdirAsync(_dir + '/bin', false);
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful');
      copy_file('bin/add.js', _dir + '/bin/add.js');
    })
    .then( function () {
      copy_file('.babelrc', _dir + '/.babelrc');
      copy_file('config.js', _dir + '/config.js');
      copy_file('gulpfile.babel.js', _dir + '/gulpfile.babel.js');
      copy_file('webpack.config.js', _dir + '/webpack.config.js');
      var pkg = {
        name: /[^\\|\/]+$/.exec(_dir)[0],
        version: '1.0.0',
        description: '',
        engines: {
          node: '>=4.2.0',
          npm: '>=3.0.0',
          babel: '>=6.0.0'
        },
        scripts: {
          'build': 'gulp build',
          'dev': 'gulp dev',
          'add:page': 'babel-node bin/add'
        },
        author: 'thondery <thondery@163.com>',
        license: 'MIT'
      };
      pkg.devDependencies = {
        'autoprefixer-loader': '^3.2.0',
        'babel-core': '^6.13.2',
        'babel-loader': '^6.2.4',
        'babel-plugin-transform-runtime': '^6.12.0',
        'babel-preset-es2015': '^6.13.2',
        'babel-preset-stage-0': '^6.5.0',
        'css-loader': '^0.23.1',
        'del': '^2.2.2',
        'extract-text-webpack-plugin': '^1.0.1',
        'file-loader': '^0.9.0',
        'gulp': '^3.9.1',
        'gulp-autoprefixer': '^3.1.1',
        'gulp-concat': '^2.6.0',
        'gulp-css-spriter': '^0.3.3',
        'gulp-data': '^1.2.1',
        'gulp-imagemin': '^3.0.3',
        'gulp-load-plugins': '^1.2.4',
        'gulp-minify-css': '^1.2.4',
        'gulp-rename': '^1.2.2',
        'gulp-sass': '^2.3.2',
        'gulp-swig': '^0.8.0',
        'gulp-uglify': '^2.0.0',
        'gulp-watch': '^4.3.9',
        'gulp-webpack': '^1.5.0',
        'gulp-webserver': '^0.9.1',
        'imagemin-pngquant': '^5.0.0',
        'json-loader': '^0.5.4',
        'less': '^2.7.1',
        'less-loader': '^2.2.3',
        'run-sequence': '^1.2.2',
        'sass-loader': '^4.0.0',
        'url-loader': '^0.5.7',
        'webpack': '^1.13.1'
      }
      pkg.dependencies = {
        'bootstrap': '^3.3.7',
        'font-awesome': '^4.6.3',
        'jquery': '^1.12.4',
        'lodash': '^4.15.0'
      }
      write(_dir + '/package.json', JSON.stringify(pkg, null, 2));
    })
    .then( function () {
      console.log();
      console.log('   install dependencies:');
      console.log();
      if (_root) {
        console.log('     npm install');
      } else {
        console.log('     $ cd %s && npm install', _dir);
      }
      console.log();
    })
    .catch( Tools.myError, function (err) {
      console.log(err.message);
      console.log('=> Process terminates');
    })
    .catch( function (err) {
      console.log(err)
    })
  
}

function copy_file(from, to) {
  from = path.join(__dirname, '../tpl', from);
  write(to, fs.readFileSync(from, 'utf-8'));
}

function write (path, str, mode) {
  fs.writeFileSync(path, str, {
    mode: mode || '0666'
  });
  console.log('   create : ', Tools.showPath(path, _root), '=> Successful')
}