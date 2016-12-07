"use strict";


// ES6 Introduces Maps
let peopleVotes = new Map([
  ["Rob", 20],
  ["Steve", 22],
  ["Jasmine", 33]
]);

// Add one more
peopleVotes.set("Sarah", 55);

// Get value
console.log(peopleVotes.get("Sarah")); // 50

// Check if key exist
console.log(peopleVotes.has("Sarah")); // True
console.log(peopleVotes.has("Jason")); // False

// Delete
peopleVotes.delete("Sarah");

// Size
console.log(peopleVotes.size); // 3

// Clear map
peopleVotes.clear();

// Iteratable
Map.prototype.keys(); // Returns iterator over the keys
Map.prototype.values(); // Returns iterator over the values
Map.prototype.entries(); // Returns iterator over the [key, value] pairs

peopleVotes.keys().forEach(person) {
  console.log(person);
}

peopleVotes.values().forEach(votes) {
  console.log(votes);
}

peopleVotes.entries().forEach([person, votes]) {
  console.log(`${person} has ${votes} votes`);
}

// Clone a Map
let aClone = new Map(peopleVotes.entries());

// entries is Maps default iterator so we could even clone it like this
let aClone = new Map(peopleVotes);

// And of course Maps can be used with the for of loop
for (let [person, votes] of peopleVotes) {
    console.log(`${person} (${votes})`);
}

// We can easy merge data with the spread operator
let otherPeople = new Map([
  ["Sarah", 20],
  ["Jason", 22],
  ["Rebecca", 33]
]);

let notAMap = [
  ["Patric", 20],
  ["Stephen", 22],
  ["Elaija", 33]
];

let mergedMap = new Map([...notAMap, ...otherPeople, ...people]);

/*
NOTE: So when should be use Maps instead of Objects?
If you have dynamic values, Maps makes it easier to get, set or even check if a
key exist. If you have static values you would not benefit from Maps and could go
with strings.

Objects does however only accept Strings as keys. If you don't want to use strings as keys
maybe you would like to use an Object as a key for example. Or maybe the key is dynamic and might
change from String to Object somewhere along the way. Then Maps is the only way to go.
*/

/*
We also have WakMaps. WeakMaps are alot like Maps but wit restrictions.
A WeakMap is not iterable so it does not have .size, .clear(), .entries(),
.keys(), .values() or forEach(). And all keys MUST also be Objects.
 */
let aWeakMap = new WeakMap();
