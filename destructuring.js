// ES6 allows easier extraction of values from a object using destructuring
let config = {info: "hello", count: 25, isTrue: false},
{info, count, isTrue} = config;

console.log(info);
console.log(count);
console.log(isTrue);

// Destructuring also supports nesting
let person = {name: "Rob",body: {legs: 4}},
{
  body: {legs},
  name
} = person;

// "Rob" 4
console.log(name, legs);

// Destructuring is fail-soft, meaning missing properties will get undefined.
let options = {},
{delay, info} = options;

console.log(delay, info) // undefined undefined

// This does how ever not apply on properties when the parent is missing.
let configuration = {},
{option: {name}} = configuration; // Error


// ES6 destructuring also works on arrays
let anArray = [1, "hello", false],
[first, second, third] = anArray;
console.log(first);
console.log(second);
console.log(third);

// Destructuring has support for nesting on array as well
let names = ["jonas", "rob", ["marcus"]],
[first, [second], third] = names;

// "jonas", "rob", "marcus" 
console.log(first, second, third);
