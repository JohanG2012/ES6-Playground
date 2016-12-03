

// Named anonumous function without any arguments
const aFunc = () => Math.random() * 100;

// Named anonumous function with multiple arguments
const anotherFunc = (argOne, argTwo) => Math.random() * argOne + argTwo;

// Named anonumous function with one arguments
const yetAnotherFunc = argOne => Math.random() * argOne;

// Named anonumous function with mutiple statements
const mutltiFunc = () => {
  if (true) {
    // Do something
  }
}

// Use of map to create an array of empty objects.
let someArray = [1, 2, 3];

let aOtherArray = someArray.map(() => ({}) );

// Use of map to create an array of objects containing the number.
let yetAnotherArray = someArray.map(x => ({number: x}) );

// An Immediatly-invoked function
(message => {
  console.log(message);
}) ("hello");
