'use strict';

module.exports = function(name) {
  return function*(value, next) {
    this[name] = parseInt(value);
    yield next;
  };
};
