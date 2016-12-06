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

// Computed property keys works the same way in ES6 as they did pre-ES6. the
// only difference is that it can now be done within object literals
function Car(make, model, value) {
  return {
    ["make" + make]: true
  };
}

// Computed Property values can not be combined with property value shorthand
// the folowing will result in a SyntaxError
let aProp = "value";
let obj = {[aProp]};

// The ES6 Method definition shorthand allows us to define a Method
// without having to use function keyword and colon
function calc(value) {
  return {
    increase() {
      this.value += 5000;
    }
  };
}


// And Method definition shorthand can be used with computed property, so the
// following will work!
function afunc(value, propertyName) {
  return {
    [propertyName]() {
      this.value += 5000;
    }
  }
}

function cube(value) {
	return Math.pow(value, 3);
}
function cubeRoot(value) {
	return Math.pow(value, 1/3);
}

// export the following functions
module.exports = {cube, cubeRoot};
