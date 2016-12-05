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


// ES6 destructuring also works on arrays
let anArray = [1, "hello", false],
[first, second, third] = anArray;
console.log(first);
console.log(second);
console.log(third);
