"use strict";

// Example of asynchronous programming in JavaScript with event handlers
var url = "/json/data.json";
var req = new XMLHttpRequest();

request.open("GET", url);

request.onload = function() {
  if (request.status === 200) {
    try {
      var responseJson = JSON.parse(request.responseText);
      // Do some stuff with the data
    } catch (error) {
      console.log(error);
    }
  } else {
    console.error("Request failed");
  }
};

request.oneror = function(e) {
  console.error(error);
}

try {
  request.send();
} catch (error) {
  console.log(error)
}
