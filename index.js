'use strict';

module.exports = function isDebug() {
  var env = process.env;
  var nodeEnv = env['NODE_ENV'] || 'development';
  var debugEnv = env['DEBUG'];

  if (debugEnv === 'true') {
    return true;
  }

  if (debugEnv === 'false') {
    return false;
  }

  if (nodeEnv === 'development') {
    return true;
  }

  return false;
};
