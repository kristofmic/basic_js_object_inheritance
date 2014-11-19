var
  mammal = require('./mammal');

module.exports = cat;

function cat(config) {
  var
    tail = true,
    self;

  config = config || {};
  config.type = config.type || 'tabby';
  config.noise = config.noise || 'meow';

  self = mammal(config);

  self.getName = getName;
  self.tail = tail;

  return self;

  function getName() {
    return 'My name is ' + config.name + ' and I am a ' + config.type + ' cat.';
  }

}