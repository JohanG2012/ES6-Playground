// ES6 allows easier extraction of values from a object using destructuring
let config {info: "hello", count: 25, isTrue: false},
{info, count, isTrue} = config;

console.log(info);
console.log(count);
console.log(isTrue);

// ES6 destructuring also works on arrays
let anArray = [1, "hello", false],
[first, second, third] = anArray;
console.log(first);
console.log(second);
console.log(third);
