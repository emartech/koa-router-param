'use strict';

const getMiddleware = require('./');

describe('Integer Middleware', function() {
  let middleware;

  beforeEach(function() {
    middleware = getMiddleware('paramName');
  });

  it('should return a generator', function() {
    expect(middleware).to.be.a.generator;
  });

  it('should return set the given value on it\'s context as "paramName"', function*() {
    let context = {};
    let called = false;
    const nextCallback = function*() { called = true; }; // eslint-disable-line require-yield

    yield middleware.call(context, 1, nextCallback);

    expect(called).to.be.ok;
    expect(context).to.have.property('paramName', 1);
  });

  it('should cast the given value to integer', function*() {
    let context = {};

    yield middleware.call(context, '123', {});

    expect(context).to.have.property('paramName', 123);
  });

});
