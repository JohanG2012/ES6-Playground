// ES6 allows easier extraction of values from a object using destructuring
let config {info: "hello", count: 25, isTrue: false},
{info, count, isTrue} = config;

console.log(info);
console.log(count);
console.log(isTrue);

var anArray = [1, "hello", false];
var first = anArray[0];
var second = anArray[1];
var third = anArray[2];
