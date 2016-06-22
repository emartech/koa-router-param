'use strict';

const _forEach = require('lodash.foreach');

module.exports = function(params) {
  return function*(next) {
    let generators = [];

    this.params = this.params || {};

    _forEach(params, (transformer, paramName) => {
      generators.push(function*() {
        this.params[paramName] = yield transformer(this.params[paramName]);
      }.bind(this));
    });

    yield generators;

    yield next;
  };
};

module.exports.Type = require('./type');
