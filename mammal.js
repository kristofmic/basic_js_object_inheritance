var
  animal = require('./animal');

module.exports = mammal;

function mammal(config) {
  var
    legs = 4,
    hair = true,
    self;

  config = config || {};
  config.noise = config.noise || '';

  self = animal({name: config.name});
  self.getName = getName;
  self.makeNoise = makeNoise;
  return self;

  function getName() {
    return 'My name is ' + config.name + ' and I\'m a mammal. ' +
           'I have ' + legs + ' legs';
  }

  function makeNoise() {
    return [config.noise, config.noise, config.noise].join(' ');
  }
}