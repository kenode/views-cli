'use strict';

exports.myError = function (e) {
  return e.code > 1000;
}

exports.showPath = function (dir, _root) {
  if (!_root) return dir;
  return dir.replace(_root, '');
}

exports.error = function (code, message) {
  var e = new Error();
  e.code = code;
  e.message = message;
  throw e;
}