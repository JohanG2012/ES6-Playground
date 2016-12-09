// The general deinition of a proxy is: Something that sits between you
// and the thing you are trying to communicate with. And that also exactly
// what it does in JavaScript. It sits between your code and an Object.

// an target is something that the proxy will virtualize. And it could be any
// kind of object
let target {
  a: 1,
  b: 2,
  c: 3
};

// an handler is an object which implements the poxys behavior using something
// called traps
let handler = {
  // get is the trap of the handler
  // Handler intercepts all get operations
  get: function(target, name) {
    // Returns targets property if available, otherwise 42
    return (
      name in target ? target[name] : 42
    );
  }
}

// Create new proxy
let proxy = new Proxy(target, handler);

// We use the proxy to interact with the object
console.log(proxy.a);  // 1
console.log(proxy.b);  // 2
console.log(proxy.c);  // 3
console.log(proxy.meaningOfLife);  // 42

// Lets change our handler a bit so only property names from a to z can be used
var handler = {
  // get and set are the traps
  get: function(target, name) {
    return (name in target ? target[name] : 42);
  },

  set: function(target, prop, value) {
    if (prop.length == 1 && prop >= 'a' && prop <= 'z') {
      target[prop] = value;
      return true;
    }
    else {
      throw new ReferenceError(prop + ' cannot be set');
      return false;
    }
  }

};

// Create new proxy
let proxy = new Proxy(target, handler);

proxy.a = 10;
proxy.b = 20;
proxy.ABC = 30; // Exception: ReferenceError: ABC cannot be set


// With proxies we can create generic wrapper for any object without changing the
// code within the objects themself
// create a profiling Proxy counting the number of times a property is accessed
function makeProfiler(target) {

  let count = {},
    handler = {

    get: function(target, name) {

      if (name in target) {
        count[name] = (count[name] || 0) + 1;
        return target[name];
      }
    }
  };

  return {
    proxy: new Proxy(target, handler),
    count: count
  }
};

let obj = {
  one: "hello",
  two: "world"
}

// create new proxy
let proxyObj = makeProfiler(obj);

console.log(proxyObj.proxy.one); // Hello
console.log(proxyObj.proxy.one); // Hello
console.log(proxyObj.proxy.two); // World
console.log(proxyObj.count.one); // 2
console.log(proxyObj.count.two); // 1

// We can also achive pretty powerful Two-way data binding using proxies

// HTML: <input type="text" id="inputname" value="" />

let user = {
  id: "inputname",
  name: ""
};

// Step 1: Update our object onchange

inputChange(myUser);

// bind input to object
function inputChange(myObject) {

	if (!myObject || !myObject.id) return;

	var input = document.getElementById(myObject.id);
	input.addEventListener('onchange', function(e) {
		myObject.name = input.value;
	});
}

// Step 2: Update the input field if our code change, using proxies
// proxy handler
var inputHandler = {

  set: function(target, prop, newValue) {

    if (prop == 'name' && target.id) {

      // update object property
      target[prop] = newValue;

      // update input field value
      document.getElementById(target.id).value = newValue;

      return true;
    }
    else return false;

  }

}

// create proxy
var myUserProxy = new Proxy(myUser, inputHandler);

// set a new name
myUserProxy.name = 'John';
console.log(myUserProxy.name); // John
console.log(document.getElementById('inputname').value); // John

// Lets allow Array to take minus index values. Where -1 returns the last
// element, -2 returns the second last etc.

function negativeArray(arr) {
  let clone = arr;

  Proxy.create({
    set: function (proxy, index, value) {
      clone[index] = value;
    },
    get function (proxy, index) {
      index = parseInt(index);
      return index < 0 ? clone[clone.length + index] : clone[index];
    }
  });
}

console.log(negativeArray(["hello", "world"])[-1]); // "world"
