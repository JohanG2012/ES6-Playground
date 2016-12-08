
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

// [].findIndex() works the same way as [].find() the difference is that it returns
// the index of the first element that fulfills the callback.

console.log(someArr.find(big)) // 3

// If nothing fulfilles the callback, -1 will be returned
console.log(someArr.find(veryBig)) // -1

// The [].entries() method returns a new Array Iterator object that contains
// the key/value pairs for each index in the array.
let a = ['a', 'b', 'c'];
let iterator = a.entries();

console.log(iterator.next().value); // [0, 'a']
console.log(iterator.next().value); // [1, 'b']
console.log(iterator.next().value); // [2, 'c']

// The [].keys() method returns a new Array Iterator that contains the
// keys for each index in the array.
let arr = ["a", "b", "c"];
let iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// The [].values() method returns a new Array Iterator object that
// contains the values for each index in the array.
let a = ['w', 'y', 'k', 'o', 'p'];
let iterator = a.values();

console.log(iterator.next().value); // w
console.log(iterator.next().value); // y
console.log(iterator.next().value); // k
console.log(iterator.next().value); // o
console.log(iterator.next().value); // p
