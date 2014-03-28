var util = require('util');

function Tree(opt){
  if (Array.isArray(opt)) {
    this.files = opt;
    this.options = {};
  } else {
    this.files = [];
    this.options = opt;
  }
}

Tree.prototype.add = function(file) {
  if (Array.isArray(file)) {
    this.files = this.files.concat(file);
  } else {
    this.files.push(file);
  }
  return this;
};

module.exports = Tree;