"use strict";

// ES6 class makes it easier to create and manage classes and also makes them
// more readable and understandable.
class Person {
  constructor(age, name, parents) {
    this.age = age;
    this.name = name;
    this.parents = parents;
  }
}

// A class does not need a constructor
class Student {

}

// This is how "class" would look like without syntactic sugar
const Person = function(age, name, parents) {
  this.age = age;
  this.name = name;
  this.parents = parents;
}

// ES6 clases are still functions
console.log(typeof.Person === "function"); // true


// In ES6 it is much easier to extand a class.
class Teacher extends Person {
  constructor(students, course, age, name, parents) {
    // constructor in the super class must first be called
    super(age, name, parents);
    this.students = students;
    this.course = course;
  }
}

// If you dont have a constructor, you dont have to use this.
class Teacher extends Person {

}

// ES6 does however not add a "abstract" keyword. But abstract classes
// can be achived with the use of new.target

class Person {
  constructor() {
    if (new.target === Person) {
      throw new Error("Can not be cunstructed directly. This is an abstract class");
    }
  }
}


let person = new Person(); // Error
let teacher = new Theacher(); // Success


// ES6 makes it easier to add methods
class Animal {
  constructor(toSay, legs) {
    this.toSay = toSay;
    this.legs = legs;
  }

  talk() {
  return toSay;
  }

  // You can even compute class method names
  ["to" + "String"]() {
    return `The is a Animal with ${this.legs} legs and when it talk it says ${this.talk()}`
  }

  // Methods that makes use of the keyword "static" are methods who are not dependent on inctances. Instead the "this"
  // keyword will refer to the class itselfs
  static doSomething() {
    this._something = "I add something here, eheheh";
  }

  // getters and setters works the same way in ES6 as in ES5
  get something() {return this._something;}
  set something() {this._something = "something"}
}

Animal._something = "";


// Extand inheritable built-ins
// NOTE: extended built-ins can not be transpiled or shimmed. They has to be nativly
// supported by the browser. So there might be a while before we can use them safely
// (the era of Internet Expoler need to come to an end first).
class myOwnError extends Error {}
