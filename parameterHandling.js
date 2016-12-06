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

// A Rest Parameter must be the last parameter. A function can only have one
// Rest Parameter
function afterRest(first, ...second, third) {
	// SyntaxError: parameter after rest parameter
}
function multipleRest(first, ...second, ...third) {
	// SyntaxError: parameter after rest parameter
}

// Set a maximum artity (max number of passed parameters) using Rest parameters
function someCalc(...nums) {
  if (num.length > 3) {
    throw new Error("max 3 parameters allowed!");
  }

  let [x, y, z] = nums;

  return x + y + z;
}

// Above can also be solved like...
function someCalc(x, y, z, ...shouldBeEmpty) {
  if (shouldBeEmpty.length > 0) {
    throw new Error("max 3 parameters allowed!");
  }

  return x + y + z;
}

// Takes an infinity of parameters by using rest parameter called objects
function merge(...objects) {
  let result = {};

  // iterate over the objects rest parameter to merge them all to a single object
  for (let i = 0; i < objects.length; i++) {
    let obj = objects[i];
    for (let key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}
var objList = [
  {
    one: "hello",
    two: "world"
  },
  {
    three: "world",
    four: "hello"
  }
];

// Uses spread operator to collapse the array
var merged = merge.(...objList);

// {one: "hello", two: "world", three: "world", four: "hello"}
console.log(merged);

// The spread operator does not have to be used in function calls
// here is a few other examples.


// Can be used with destructuring
let numbers = [1, 2, 3, 4, 5, 6],
[one, two, ...rest] = numbers;

// [3, 4, 5, 6], 1, 2
console.log(rest, one, two);

// We can also collapse and array within another array
let moreNumbers = [...numbers, 7, 8];

// [1, 2, 3, 4, 5, 6, 7, 8]
console.log(moreNumbers);

// Make use of destructuring to make it clear which properties a object contains
function ajax(url, {method, delay, callback}) {
  console.log(url, method, delay);
  setTimeout(
    () => callback("DONE!"),
    delay
  );
}

ajax(
  "http://some.api.com/get",
  {
    delay: 5000,
    method: "POST",
    callback: function(m) {
      console.log(m);
    }
  }
);
