// ES6 allows easier extraction of values from a object using destructuring
let config {info: "hello", count: 25, isTrue: false},
{info, count, isTrue} = config;

console.log(info);
console.log(count);
console.log(isTrue);
