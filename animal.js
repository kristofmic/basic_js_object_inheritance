module.exports = animal;

function animal(config) {
  var
    energy = 1;

  config = config || {};

  return {
    eat: eat,
    poo: poo,
    getName: getName
  };

  function eat() { return ++energy; }
  function poo() { return !energy ? energy : --energy; }
  function getName() { return 'Hi, my name is ' + config.name || ''; }
}