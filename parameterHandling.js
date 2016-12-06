function getData(data, useCache) {
  if (useCache === undefined) {
    useCache = true;
  }

  if (useCache) {
    console.log("Uses cache for", data);
  } else {
    console.log("not using cache for", data);
  }
}
