"use strict";


// ES6 introduces a shorthand for values. It lets us shorten intializaton of a
// property within a object literal if the property key matches an already
// exsisting variable name.
// NOTE: A refferenceError will be thrown if the JS Engine can not find a variable
// with the same name within the containing scope.
function Person(name, age, parents) {
  return {
    make,
    model,
    value
  };
}

function Car(make, model, value) {
  var car = {};

  car["make" + make] = true;

  return car;
}
