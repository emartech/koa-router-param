'use strict';

const transformer = require('./');

describe('Number', function() {

  it('should convert param to number', function() {
    expect(transformer('123456')).to.return(123456);
  });

});
