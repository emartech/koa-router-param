'use strict';

const routerParam = require('./');

describe('koa-router-params', function() {

  describe('middleware', function() {

    it('should return a generator', function() {
      expect(routerParam()).to.be.a.generator;
    });

    it('should yield the given callback', function*() {
      let middleware = routerParam();
      let called = false;
      let nextCallback = function*() { called = true; }; // eslint-disable-line require-yield

      yield middleware.call({}, nextCallback);

      expect(called).to.be.ok;
    });

  });

  describe('transformation', function() {

    let context;

    beforeEach(function() {
      context = { params: { paramName: 'value' } };
    });

    it('should set value returned by transformer to context', function*() {
      const transformer = function*() { return 'newValue'; }; // eslint-disable-line require-yield
      let middleware = routerParam({
        paramName: transformer
      });

      yield middleware.call(context, {});

      expect(context.params.paramName).to.equal('newValue');
    });

    it('should call the given method with parameter value in context', function*() {
      const transformer = function*(value) { return value; }; // eslint-disable-line require-yield
      let middleware = routerParam({ paramName: transformer });

      yield middleware.call(context, {});

      expect(context.params.paramName).to.equal('value');
    });

    it('should suppress error if no parameter exists in the context', function*() {
      const transformer = function*() {}; // eslint-disable-line require-yield
      const middleware = routerParam({ notExists: transformer });
      yield middleware.call({}, {});
    });

  });

  describe('.Type', function() {

    it('should exists', function() {
      expect(routerParam.Type).to.be.ok;
    });

  });

});
