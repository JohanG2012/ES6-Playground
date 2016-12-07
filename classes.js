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


Person.prototype = new Student();
