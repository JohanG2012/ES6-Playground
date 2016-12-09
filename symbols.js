// ES6 comes with a new primitive type called symbols, they serve as a unique id
// and are created via the Symbol() factory funciton.
let symbolOne = Symbol();

// Symbol() can takes a string as argument that serve as a description of the symbolOne
let symbolTwo = Symbol("A symbol");

// Every symbol is unique
console.log(symbolOne === symbolTwo); // false

// As already said, symbols are a new primitive type
console.log(typeof Symbol()) // "symbol"

// So this does not say much.. What can we use them for?
// They are intended to be used as property keys without risking name collision

// Just to make this ridiculous easy to explain. Let's save we have an application
// who makes heavy use of the strings "Development" and "Production". And now we
// want to add some code to decide if the application should be build for Production
// or Development. But we know we already use these alot, so we want to make sure that
// this is unique values.
class App {
  constructor(mode) {
    switch (mode) {
      case App.DEV:
      // Set up app for dev environment
      break;
    case App.PROD:
      // Set up app for production environment
      break;
    }
  }
}

App.DEV = Symbol("dev"); // unique
App.PROD = Symbol("prod"); // unique

let app = new App(App.Dev);

// Another upside of Symbols is that they are ignored by function such as
// Object.keys(), Object.getOwnPropertyNames() and JSON.stringify() which
// makes them ideal for properties that you dont want to be included when
// serialzing an Object
let user = {};
let email = Symbol();

user.name = "John";
user.age = 33;
user[email] = "john.doe@mail.com"

Object.keys(user); // [ "name", "age" ]

Object.getOwnPropertyNames(user); // [ "name", "age" ]

JSON.stringify(user); // "{"name":"John","age":33}"

/*
The absolute best real world example of where Symbols are usefull is if you are
a library creator and want to make sure you objects, properties or methods does
not overwrite existing ones. Or the oposite where other libraries overwrite yours.
*/

/*
And... there is something called Well-known Symbols...
But they are kind of easy to understand...

Since Symbols is a new primitive type as of ES6. They where ideal to be used to
adding new functionality to existing types without breaking backward compability.

So "well-known" symbols are predefined properties of the symbol function that are
used to customize the behavior of some features and used to implement new features
such as iterators.
*/

/*
Symbols also make use of something refered to as "The Global Registry"
which is a runtim-wide symbol registry meaning you can stor and retrive
symbol accross different execution context, such as between a document and a service worker
*/

// Symbol.for retrives a Symbold for a given key from the Registry
let userOne = Symbol.for("user");
let userTwo = Symbol.for("user");

console.log(userOne === userTwo); // True

// Symbol.keyFor() retrives the key for a given symbol
Symbol.keyfor(userOne) // "user"
