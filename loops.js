"use strict";

// Iterate over an array
// Should not be done with a for in loop because it itirate in an arbitary order.
var arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(function (value, i) {
  console.log(value);
});
