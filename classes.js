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
