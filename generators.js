/*
Genwrators is a new type of function in ES6. It is declared with function*
and returns a generator object which is specific typ of iterator.

yield operator is somthing used in generator fuctions which paues the execution
within the generator function.
*/

// A simple generator function
function* generatorFunction() {
  console.log("before");
  yield;
  console.log("after");
}

// Calling generatorFunction() won't execute the fuction. Insted it returns a
// generator object whch is assigned to generator. Through generator we get control
// over generatorFunction's execution
let generator = generatorFunction();

// Simple use of our generator

// before
// {value: undefined, done: false}
// NOTE: On the first next, execution of generatorFunction starts. And runs until
// the first yield. We have not given yield an operand to the object returned is undefined
console.log(generator.next());

// "I am before after!!!"
// NOTE: generatorFunction is currently paused, so the text is loged.
console.log("I am before after!!!");

// after
// {value: undefined, done: true}
// NOTE: generatorFunction now continus and runs until it finish. It returns an
// object where done: is true.
console.log(generator.next());

// More calls to next() will do nothing
// {value: undefined, done: false}
// NOTE: the generatorFunction has finished to run.
console.log(generator.next());

// There is 4 ways to create a generator object.

// From a generator function
function* generatorFunc() { yield; }
let generator = generatorFunc();

// From a generator function expression
const generatorFunc = function*() { yield; }
let generator = generatorFunc();

// From a generator function within a object literal
let someObj = { *generatorFunc() { yield; } };
let generator = someObj.generatorFunc();

// From a generator definition in a class definition
SomeClass { *generatorFunc() { yield; } }
let someObj = new SomeClass();
let generator = someObj.generatorFunc();


// Generators can be data producers, pretty much meaning they are iterators. And
// for each iteration they return a value object.
// Creating iterators is simple with the use of generators. Because generators
// already have .next() and [Symbol.iterator]() built-in.

//  Taken from Jason Orendorff’s ES6 In Depth: Generators blog post. We try to
// implement a range() function which returns an iterator. With a specific start for
// a specific count number of times. Then later we will rewrite with the use of an generator.
class RangeIterator {
  constructor(start, count) {
    this.start = start;
    this.count = count;
    this.delta = -1;
  }
  [Symbol.iterator]() { return this; }

  next() {
    this.delta++;

    let value = this.start + this.delta;

    if (value < this.start + this.count) {
      return {value};
    } else {
      return {done: true};
    }
  }
}

function range(start, count) {
    return new RangeIterator(start, count);
}

for (let teenageYear of range(13, 7)) {
    console.log(`Teenage angst @ ${teenageYear}!`);
}

// If we instead do this with generators.
function* range(star, count) {
  for (let delta = 0; delta < count; delta++) {
    yield start + delta;
  }
}

for (let teenageYear of range(13, 7)) {
    console.log(`Teenage angst @ ${teenageYear}!`);
}

// Ofcourse we can use mutiple yield as well.
function* awesomeGeneratorFunc() {
    console.log('start');

    console.log('first yield');
    yield 'Generators';

    console.log('second yield');
    yield 'are';

    console.log('third yield');
    yield 'cool!';

    console.log('all done!');

    return 1000;
}


let generatorObj = awesomeGeneratorFunc();

// start
// first yield
// {value: 'Generators', done: false}
console.log(generatorObj.next());

// second yield
// {value: 'are', done: false}
console.log(generatorObj.next());

// third yield
// {value: 'awesome!', done: false}
console.log(generatorObj.next());

// all done!
// {value: 1000, done: true}
console.log(generatorObj.next());

// {value: undefined, done: true}
console.log(generatorObj.next());

// {value: undefined, done: true}
console.log(generatorObj.next());


// start
// first yield
// value: "Generators"
// second yield
// value: "are"
// third yield
// value: "awesome!"
// all done!
for (let word of generatorObj) {
    console.log(`value: "${word}"`);
}


// We can use generators with destructuring as well
// start
// first yield
// second yield
let [firstValue, secondValue] = generatorObj;

// output: 'Generators'
console.log(firstValue);

// output: 'are'
console.log(secondValue);

// and with spread operator...
let generatedArray = [...generatorObj];

// start
// first yield
// second yield
// third yield
// all done!
// ['Generators', 'are', 'awesome!']
console.log(generatedArray);

// By using yield* we can delegate the generator population to another generator function
function* delegatedGeneratorFunc(start) {
    // yield the first item
    yield 'before';

    // delegate yielding to awesomeGeneratorFunc which will add 3 more items
    yield* awesomeGeneratorFunc();

    // yield 5th item
    yield 'between';

    // delegate yielding to range which will add 5 items, we can pass parameters/variables
    // just like regular function without yield* we would just get back a new range generator
    // with only yield, the generator would be added as 10th item
    yield* range(start, 5);

    // yield 11th and final item
    yield 'after';
}

// ['before', 'Generators', 'area', 'awesome', 'between', 1, 2, 3, 4, 5, 'after']
console.log([...delegatedGeneratorFunc(1)]);

// The value of yield* can be any iterable
function* iterableGeneratorFunc() {
    yield 'adios';
    yield* 'hello';  // a string is an iterable!
    yield 'au revoir';
}

// output: ['adios', 'h', 'e', 'l', 'l', 'o', 'au revoir']
console.log([...iterableGeneratorFunc()]);

// when using yield* the return value of a generator function is returned
function* delegatedGeneratorFuncV2() {
    let start = yield* awesomeGeneratorFunc();
    yield* range(start, 3);
}

// ['Generators', 'are', 'awesome', 1000, 1001, 1002]
console.log([...delegatedGeneratorFuncV2()]);

// Now lets do a real world case with generators.

// Lets say you would have this callback based code.
function ajaxCall(url, callback) {
  // some ajax stuff
  // calls callback(result)
}

ajaxCall("http://example.com", function(resultOne) {
  let data = JSON.parse(resultOne);

  ajaxCall("http://anotherexample.com/?id=" + data.id, function(resultTwo) {
    let response = JSON.parse(resultTwo);
    console.log(`You wanted: ${data.value}`);
  });
})

// The same could be done with
function req(url) {
  ajaxCall(url, function(response) {
    it.next(response);
  })
}

function* main() {
  let resultOne = yield req("http://example.com");
  let data = JSON.parse(resultOne);

  let resultTwo = yield reg("http://anotherexample.com/?id=" + data.id);
  let respone = JSON.parse(resultTwo);
  console.log(`You wanted: ${data.value}`)
}

// Instance generator
var it = main();

// Start the process
it.next();
