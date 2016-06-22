'use strict';

const sinon = require('sinon');
const chai = require('chai');
chai.use(require('sinon-chai'));
chai.use(require('chai-generator'));
chai.use(require('chai-is-generator'));

before(function() {
  global.expect = chai.expect;

  sinon.stub.returnsWithResolve = function(data) {
    return this.returns(Promise.resolve(data));
  };

  sinon.stub.returnsWithReject = function(error) {
    return this.returns(Promise.reject(error));
  };
});


beforeEach(function() {
  this.sandbox = sinon.sandbox.create();
});


afterEach(function() {
  this.sandbox.restore();
});
