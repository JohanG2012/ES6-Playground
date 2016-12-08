"use strict";

// Example of asynchronous programming in JavaScript callbacks
function fetch(url, callback) {
  var request = new XMLHttpRequest();

  request.open("GET", url);

  request.onload = function() {
    var data;
    var error;

    if (request.status === 200) {
      data = request.responseText;
    } else {
      error = new Error("Request failed");
    }

    callback({data:data, error:error});
  }

  request.oneror = function(error) {
    callback({error:error});
  }

  try {
    request.send();
  } catch(error) {
    callback({error:error})
  }
}

fetch('/json/data.json', function(responseObj) {
	if (!responseObj.error) {
		try {
			console.log('data!', JSON.parse(responseObj.data));
		}
		catch (e) {
      console.error(e);
    }
	} else {
    console.error(responseObj.error);
  }
});
