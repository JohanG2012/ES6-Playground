// In ES6 functions bodies does not have to deal with default logic
// the new syntax is also alot easier to understand
// parameters with default values are concidered as optional
function getData(data, useCache=true) {
  if (useCache) {
    console.log("Uses cache for", data);
  } else {
    console.log("not using cache for", data);
  }
}

// Clever way to add required parameters in ES6 by Allen Wirfs-Brock
function throwIfMissing() {
  throw new Error("Missing parameter");
}

function someFunc(requiredParam = throwIfMissing()) {
  // Some code...
}
