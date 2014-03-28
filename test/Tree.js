var ftree = require('../');
var File = require('vinyl');
var path = require('path');

var should = require('should');
require('mocha');

// some mock info
var cwd = '/home/fake/';
var base = '/home/fake/project/';
var paths = ['file.txt', 'folder/file2.txt', 'folder/folder2/folder3/stuff.js'];
var files = paths.map(function(p){
  var random = Math.random().toString(36).substring(7);

  return new File({
    cwd: cwd,
    base: base,
    path: path.join(base, p),
    contents: new Buffer(random)
  });
});

describe('Tree', function() {
  describe('constructor()', function() {
    it('should take an array of files as options', function(done) {
      var tree = ftree.create(files);
      should.exist(tree);
      should.exist(tree.files);
      tree.files.should.eql(files);
      done();
    });
  });

});
