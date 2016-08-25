'use strict';

var Promise = require('bluebird');
var mkdirp = require('mkdirp');

var initproxy = { mkdir }
module.exports = Promise.promisifyAll(initproxy)

// 创建目录
function mkdir(dir, _root, callback) {
  if (_root && !dir) {
    return callback(null, { state: 0, path: dir })
  }
  mkdirp(dir, function (err) {
    if (err) return callback(err)
    return callback(null, { state: 1, path: dir })
  })
}

// 创建文件
