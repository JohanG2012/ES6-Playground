"use strict";

// Example of asynchronous programming in JavaScript using promises
function fetch(url) {

  // Return promis object
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
