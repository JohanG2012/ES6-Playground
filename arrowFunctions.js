

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

// this values with ES6 arrow funcitons
const car = {
  speed: 0,
  accelerate: function() {
    this.accelerator = setInterval(
      () => {
        this.speed++;
        console.log(this.speed);
      },
      100
    );
  }
};

car.accelerate();

setTimeout(() => car.cruise(), 5000);

// Arrow functions are still functions
console.log(topeof function() {}); // "funciton"
console.log(typeof (() => {})); // "function"
console.log(function() {} instanceof Function); // true
console.log((() => {}) instanceof Function); // true

 
