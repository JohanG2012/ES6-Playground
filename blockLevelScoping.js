// declare a new variable that will only exist within the current block
let someVar = "a new variable"


// Example of what means that the variable only exists within its own block
function doAlot() {
  let aValue = 15;

  if (true) {
    let aValue = 21;
    console.log(aValue); // 21
    // This is reffered to as shadowing because aValue in the if statement
    // "shadows" the aValue in the outer scope
  }

  console.log(aValue); // 15
}

// const must always be declared with a value directly
// const values can not be changed, they are read-only.
const unique = "Hi! I'm unique!";

// const object properties can still be changed!
const aObj = {
  id: 1,
  info: "I will always be me!"
};

aObj.info = "No, you will not! Mohaha";


// By using ES5 Object.freeze we can make sure so that the objects properties
// can not be changed!
const totalyUnique = Object.freeze({
  id: 1,
  info: "I will always be me!"
});

// Time for scary stuff! The temporal dead zone (TDZ)!
// TDZ is within a scope where let or const is declared, but
// before it is actually declared
funciton aFunc() {

  // TDZ !!!!
  hi = "hello"; // ReferenceError
  console.log(h1): // ReferenceError

  // TDZ ends at declaration
  let hi;

  console.log(h1); // Undefined

  hi = "Hello";
  console.log(h1); // "Hello"
}


// let can be accessed outside of loops
for (let i = 0, i < 10; i++) {
  console.log("hi");
}

console.log(i); // ReferenceError


// it is not possible to create let variables that has the same name as
// a parameter
function sayHello(hello) {
  let hello = "hi"; // TypeError

  if (true) {
    // I'm "shadows" the outer scope
    let hello = "hi";
    console.log(hello); // "hi"
  }
  console.log(hello); // parameter value
}
