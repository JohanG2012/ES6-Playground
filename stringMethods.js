// The str.includes() method determines whether one string may be found within
// another string, returning true or false as appropriate.

// includes is case sensetive
"Green gras".includes("green"); // false

// More examples
"Green gras".includes("sky"); // false
"Green gras".includes("Green"); // true

// As a second argument includes() takes a start position where the search should
// start
"Green gras".includes("Green", 1); // false

// The repeat() method constructs and returns a new string which contains the
// specified number of copies of the string on which it was called, concatenated together.
'abc'.repeat(-1);   // RangeError
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0);  // RangeError

// The startsWith() method determines whether a string begins with the
// characters of another string, returning true or false as appropriate.
let str = 'To be, or not to be, that is the question.';

console.log(str.startsWith('To be'));         // true
console.log(str.startsWith('not to be'));     // false

// startsWith() can in the same way as includes() can take a start position
// where the search should start as its second argument
console.log(str.startsWith('not to be', 10)); // true

// str.endsWith() works in the exact same way as startsWith() but instead checks
// the ending of the string.
console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be'));     // false

// The second argument is different for the endsWith() compared to startsWith()
// the different is that it is the end poistion where the search should stop.
console.log(str.endsWith('to be', 19)); // true
