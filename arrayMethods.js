
// Takes an iterable and turns it into an array
let arr = Array.from(iterable);

// Can be used on..
// Strings...
console.log(Array.from("foo")); // ["f", "o", "o"]

// Sets....
let aSet = new Set(["Foo", 24]);
console.log(Array.from(aSet)); // ["Foo", 24]

// Maps...
let aMap = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(Array.from(aMap)) // [[1, 2], [2, 4], [4, 8]]

// arguments...
function func() {
  console.log(Array.from(arguments));
}

func(1, 2, 3, "hello", "world"); // [1, 2, 3, "hello", "world"]

// with arrow functions as a map function to maniplutate the array...
console.log(Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]


// Array.of() works similar to Array() the difference is how they handle a single integer
console.log(Array.of(7));       // [7]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]

console.log(Array(7));          // [ , , , , , , ]
console.log(Array(1, 2, 3));    // [1, 2, 3]

// [].fill fills a entire array with one single value
let arr = [1, 2, 3];
arr.fill(0);
console.log(arr); // [0, 0, 0]

// The second argument is start index
arr.fill(1, 1);
console.log(arr); // [0, 1, 1]

// the third argument is end index
arr.fill(2, 1, 1);
console.log(arr); // [0, 2, 1]

// [].find() returns the first element that fulfills provided callback
let someArr = [1, 2, 3, 50, 75];

function big(element) {
  return element >= 20;
}

function veryBig(element) {
  return element >= 150;
}

console.log(someArr.find(big)) // 50

// If nothing fulfilles the callback, undefined will be returned
console.log(someArr.find(veryBig)) // undefined
