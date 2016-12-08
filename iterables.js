// An iterable is an object that intends to make its sequential elements
// publicly accessible through iteration interfaces.

/*
for-of loop can work on Array, Map, Set, String, arguments etc because they
all are iterables.

An iterable is an object that intends to make its sequential elements publicly
accessible through iteration interfaces.

This object does so by implemtenting the @@iterator method using the Symbol.iterator Symbol

The default @@iterator returns an object that implements the iterator “interface”
which is the actual object that for-of and other iteration features use to iterate.
*/

// Provides a custom way to iterate over an object
Symbol.iterator();

// The for-of loops iterating over an Array by accessing the Symbol.iterator()
// And iterate until the iterator says that it is done.
let values = ['alpha', 'beta', 'charlie'];

for (let value of values) {
    console.log(value);
}

// This explains how the for-of loop works with the Symbol.iterator();
let values = ['alpha', 'beta', 'charlie'];
let defaultIterator = values[Symbol.iterator]();

// {value: 'alpha', done: false} next() will always return an object with the value
// of that iteration no matter if the iteration is done or not.
console.log(defaultIterator.next());

// {value: 'beta', done: false}
console.log(defaultIterator.next());

// {value: 'charlie', done: false}
console.log(defaultIterator.next());

// {value: undefined, done: true} done is true, so the for-of loop stops iterating
console.log(defaultIterator.next());

// Implementing your own very simple iterator might look like this.
class MyOwnIterator {
  constructor() {
    this.count = 0;
  }
  next() {
    this.count++;

    if (this.count === 1) {
      return {value: "John"};
    } else if (this.count === 2) {
      return {value: "Jasmine"};
    } else {
      return {done: true};
    }
  }
}

let iterator = new MyOwnIterator();

// {value: 'John'}
console.log(iterator.next());

// {value: 'Jasmine'}
console.log(iterator.next());

// {done: true}
console.log(iterator.next());

// {done: true}
console.log(iterator.next());

// To allow our own iteratotor to be used it iterables we would first need to
// create an iterable object with a default iterator
let mySequence = {
  // Make use of computed property keys
  [Symbol.iterator]() {
    return new MyOwnIterator();
  }
}

// We can now use our iterator on mySequence with a for-of loop
// John
// Jasmine
for (let name of mySequence) {
  console.log(name);
}

// The next obvious step would be that we dont have use a wrapper such as
// mySequence, Right? We can do so by making our iterator iterable by
// implementing the default @@iterator and then return itself.
class MyOtherIterator {
  constructor() {
    this.count = 0;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    this.count++;

    if (this.count === 1) {
      return {value: "John"};
    } else if (this.count === 2) {
      return {value: "Jasmine"};
    } else {
      return {done: true};
    }
  }
}

let mySecondIterator = new MyOtherIterator();

// John
// Jasmine
for (let name of mySecondIterator) {
  console.log(name)
}

/*
NOTE: the iterator interface also includes a throws() method. But it is only used
for generators and yield - and then it is optional.

The iterator interface also includes a return() method. It is optional to implement and
only used to make the iterator closeable. For example in an for-of exits because of a return,
break or an exception. The return method then functions as a hook to do any cleanups before
the iterator is no longer used.

Other cunstructs that make use of the iterator

- Array.from
- Spread operator
- Array destructuring
- Map and Set
- Promise.all and Promise.race
- yield*

There is also something called Combinators. Combinators are function that manipulate
iterables to create new ones. They are used in for example LINQ and RxJS.

So, lets create an Combinator then! (adapted from an example by Axel Rauschmayer in Iterables and iterators)
 */

function take(iterable, count) {
    // get default `@@iterator` from original iterable
    let iterator = iterable[Symbol.iterator]();

    // return new (anonymous) iterable
    return {
        next() {

            if (count > 0) {
                // if there are items remaining, return the next
                // one from the iterable
                count--;

				        // return the value from original iterable's iterator.
                return iterator.next();
            }
            else {
                return {done: true};
            }
        },
        [Symbol.iterator]() {
            // implementing default @@iterator
            return this;
        }
    };
}

// [1, 2, 3]
console.log(Array.from(take([1, 2, 3, 4, 5, 6, 7, 8], 3)));
