"use strict";

// Iterate over an array
// Should not be done with a for in loop because it itirate in an arbitary order.
// Could be done with forEach but other array-like object do not have forEach
// example nodeList or arguments.
// ES6 brings the best solution with for-of loops. The purpuse of for-of loops is to
// iterate over arrays while for-in loops purpose is to iterate over objects
// for-of loops can also be used to iterate over a string or an array-like objects like
// nodeList and arguments
let arr = [1, 2, 3, 4, 5, 6, 7];

for (let value of list) {
  console.log(value);
}
