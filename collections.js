"use strict";


// ES6 Introduces Maps, Maps are used to map values also known as Key and Value pairs.
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

So when to use WeakMap? If you add Objects as keys to a Map. Those Objects will be stored
memory for as long as the Map object exist. Which might cause memory leaks.

It is called a WeakMap because the object it holds as keys will be sent to garbage collection
if there are no other referencec to the keys elsewhere. So Objects in a WeakMap will be sent
to garbage collection and Removed as soon as all other refferences to them are deleted. this
prevents memory leaks.
 */
let aWeakMap = new WeakMap();

// The Set object lets you store unique values of any type
let names = new Set(["Rob", "Jason", "Sarah"]);

// You can add stuff
names.add("Jones");

// Duplicated values are removed
names.add("Jones"); // deleted

// You can check if a value exist
console.log(names.has("Jones")); // True
console.log(names.has("Jasmine")); // False

// You can delete a value
names.delete("Jones");

// You can check size
console.log(names.size);

// You can clear the set
names.clear();

/*
NOTE: A Set has the same iterables as a Map. The difference is that .keys()
will returns the same iterator as the the .values(). And .entries() will returns
an iterator with [key, value] pairs where the key and the value has the same value.
The reason for this is because a Set only holds a value. But so it could be easily
paired with a Map.
 */

// You can clone a Set in the same way you clone a Map
let setClone = new Clone(names)

// You can use sets in helper function to create array without duplicates
function removeDupes(array) {
  return [...new Set(array)];
}

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 6];

let noDupesArr = removeDupes(arr);

console.log(noDupesArr); // [1, 2, 3, 4, 5, 6]

// Common non-mutating operations performed on Sets in other languages
// are union, intersection and difference. These are not included in ES6
// but we can create them ourselfs.

// Union - is a new Set containing both set A and set B
function union(a, b) {
  return new Set([...a, ...b]);
}

let setUnion = union(
    new Set(['a', 'b', 'c', 'd']),
    new Set(['d', 'e', 'f', 'g'])
);

// output: 8
console.log(setUnion.size);

// Intersection - Create a new Set that cointain all elements tha exist in both
// Set A and Set B
function intersection(setA, setB) {
    return new Set([...setA].filter(item => setB.has(item)));
}

let setIntersection = intersection(
    new Set(['a', 'b', 'c', 'd']),
    new Set(['d', 'e', 'f', 'g'])
);

// output: 1
console.log(setIntersection.size);

// Difference - Takes Set A and Set B and create a new Set that only contains the
// elements that only existed in Set A.
function difference(setA, setB) {
    return new Set([...setA].filter(item => !setB.has(item)));
}

let setDifference = difference(
    new Set(['a', 'b', 'c', 'd']),
    new Set(['d', 'e', 'f', 'g'])
);

// output: 3
console.log(setDifference.size);
