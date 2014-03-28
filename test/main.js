var ftree = require('../');
var should = require('should');
require('mocha');

describe('vinyl-fs-tree', function() {
  describe('create()', function() {
    it('should return a new tree', function(done) {
      should.exist(ftree.create());
      done();
    });
  });
});
