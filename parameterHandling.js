"use strict";

// In ES6 functions bodies does not have to deal with default logic
// the new syntax is also alot easier to understand
// parameters with default values are concidered as optional
function getData(data, useCache=true) {
  if (useCache) {
    console.log("Uses cache for", data);
  } else {
    console.log("not using cache for", data);
  }
}

// Clever way to add required parameters in ES6 by Allen Wirfs-Brock
function throwIfMissing() {
  throw new Error("Missing parameter");
}

function someFunc(requiredParam = throwIfMissing()) {
  // Some code...
}

// In ES6 functions can not only have String, Number and Boolean as
// default parameter values but it can also have Array, Object and Function
// as a default parameter value, it can even be the result of a expression or
// function call
function func(width=calcWidth(), height=width*2, config={option: true}) {
  // some code
}

// undefined values will be defaulted
function calc(x, y=7, z) {
  console.log(x, y, z);
}

// 3, 7, 4
calc(3, undefined, 4)

// arrow functions with ONE parameter with a default value, still need parenthesis
const randomFunc = (x=2) => x*x;

// ES6 allows a function to take more parameters then specified.
// it is done by adding 3 dots before a param. That param is now a "Rest Parameter"
// a rest parameter is a array containing the rest of the parameters.
function join(seperator, ...values) {
  return values.join(seperator);
}

//  "one++two++three"
console.log(join("++", "one", "two", "three"));
