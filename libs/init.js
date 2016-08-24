'use strict';

var mkdirp = require('mkdirp');
var Promise = require('bluebird');
var util = require('util');
var Tools = require('./tools');
var InitProxy = require('./initproxy')

module.exports = function (dir) {
  var _root = dir ? null : process.cwd();
  var _dir = dir || process.cwd()
  InitProxy.mkdirAsync(dir, true)
    .then( function (doc) {
      if (doc.state === 1) {
        console.log('   create : ', doc.path, '=> Successful')
      }
      //dir = dir || process.cwd()
      return InitProxy.mkdirAsync(_dir + '/assets', false)
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful')
      return InitProxy.mkdirAsync(_dir + '/assets/img', false)
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful')
      return InitProxy.mkdirAsync(_dir + '/assets/sass', false)
    })
    .then( function (doc) {
      if (doc.state === 0) {
        Tools.error(1001, util.format('   create : ', Tools.showPath(doc.path, _root), '=> Failure'));
      }
      console.log('   create : ', Tools.showPath(doc.path, _root), '=> Successful')
    })
    .catch( Tools.myError, function (err) {
      console.log(err.message);
      console.log('=> Process terminates');
    })
    .catch( function (err) {
      console.log(err)
    })
  
}