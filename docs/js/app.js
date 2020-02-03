const fetch = require("node-fetch");

fetch('https://api.darksky.net/forecast/69c6fee3ced588bd9f706e41453643c8/52.308262, 5.054286')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });

