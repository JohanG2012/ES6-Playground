"use strict";

// Example of asynchronous programming in JavaScript using promises
function fetch(url) {

  // Returns promise object
  // The function in the Promise constructor is known as a executor.
  // If  computation went well, the executor send the results trough resolve().
  // If the computation did not go fell, the executor informs the user trough reject().
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.open("GET", url);

    request.onload = function() {
      if (request.status === 200) {
        //Furfill promise
        resolve(request.responseText);
      } else {
        // reject promise
        // By throwing an arror we can make use of stack trace
        reject(new Error("request failed"));
      }
    };
    request.send();
  })
}

fetch("/json/data.json")
  .then(response => {
    let data = JSON.parse(response.text);
    console.log("main",data);

    return fetch(data.url);
  })
  .then(response => {
    console.log("inner data", response);
  })
  .catch(error => {
    // Catch all errors
    console.error(error);
  })

/*
A promise can have 3 different states.

Unsettled/pending - the promise async operation has not computed its result yet
Settled: fulfilles - the promise async operation has completed successfully
Settled: rejected - The promises async operation did not complete sucessfully

A promise can only transition from Unsettled to Settled one time.

The convention for promises do say that you should only use then() for fulfillments
and catch() exclusibly for errors.

If you call then() on a already fullfilled promise you will recive the cached settled value right away

*/

// You can create an "immediatly" fullfilled promis by using resolve directly
Promise.resolve("John")
  .then(name => {
    console.log(name)
  }
);
// But since a Promise always is async this one will log before above "name"
console.log("Jasmine");

// You can also create an "immediatly" rejacted promis by using reject directly
Promise.reject(new Error("I did something wrong..."))
  .catch(error => {
    console.error(error);
  }
);

/*
NOTE: A Promise is an thenable. An thenable that behaves the same way as a
promise meaning it accepts two arguments that are functions resolve() and
reject() and make use of then().
*/

// Example of how all thrown error in a porimise is handle by the catch() callback

// Immediatly fulfilled promise
Promise.resolve()
  .then(() => {
    // Throws an error which will be caught by catch()
    throw new Error("Something went wrong here...")
  })
  .catch((error) => {
    // "Something went wrong here..."
    console.log(error);

    // You can also throw an error here
    throw new Error("here too...");
  })
  .catch((error) => {
    // And it will be caught here...

    // "here too..."
    console.log(error)
  }
);

// You can define default values to be used incase of failure by adding a return value
// in your catch() callback.
fetch("/json/data.json")
  .catch(() => {
    // Return default data
    return JSON.stringify({someProp: "someValue"});
  })
  .then(response => {
    // If the fetch where not successfull output would be:
    // {someProp: "someValue"}
    console.log(response);
  }
);

// Example of how errors are passed down the chain

// Immediatly rejected Promise
Promise.reject(new Error("Failure!"))
  .then(() => {
    // Promise is rejected, this reaction is never called
  })
  .then(() => {
    // The same goes for this one
  })
  .catch(error => {
    // The rejection reaction is called to handle the rejection that happend
    // further up the chain.
    // "Failure!"
    console.log(error);
  }
);

// If you have mutiple Promises that you want the results for before moving
// forward you can use Promise.all

// All fetch requests are fulfilled trought Promise.All
function fetchAll(...urls) {
    return Promise.all(
      // map the array of urls into and array of fetch promises
      urls.map(fetch)
    );
}

// Make XHR request for each URL and process once all request completed
fetchAll(
  "/json/dataOne.json",
  "/json/dataTwo.json",
  "/json/dataThree.json",
  "/json/dataFour.json"
)
  .then(responses => {
    // Responses is a array of responses
    console.log(responses.length); // 4

    // Some processing here...
  })
  .catch(error => {
    // one or more of the requests failed or there was an error in the then() callback
    console.log(error);
  }
);

// There is also somthing called Promise.race . Promise.race works in a similar
// way as Promis.all the differece is if the first Primise success, then the
// following will be fullfilled as well. But if the first Promise gets rejected
// then all of the other Promises will get rejected as well. Example below

// Function that throws error on timeout
function timeout(delay=5000) {
  return wait(delay).then(() => {
    throw new Error("Time out!");
  });
}

function fetch(url, delay=5000) {
  return Promise.race([
    fetch(url),
    timeout(delay)
  ]);
}

// Promise will be fullfilled if the fetch is fullfilled before the timout
fetch("/json/data.json", 2000)
  .then(response => {
    // Success on time
    console.log(response);
  })
  .catch(error => {
    // If not handles timeout here..
    console.log(error);
  }
);
