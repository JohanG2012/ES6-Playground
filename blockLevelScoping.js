// declare a new variable that will only exist within the current block
let someVar = "a new variable"


// Example of what means that the variable only exists within its own block
function doAlot() {
  let aValue = 15;

  if (true) {
    let aValue = 21;
    console.log(aValue); // 21
  }

  console.log(aValue); // 15
}

// const must always be declared with a value directly
// const values can not be changed, they are read-only.
const unique = "Hi! I'm unique!";

// const object properties can still be changed!
const aObj = {
  id: 1,
  info: "I will always be me!"
};

aObj.info = "No, you will not! Mohaha";
