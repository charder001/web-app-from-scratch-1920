fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/69c6fee3ced588bd9f706e41453643c8/52.308262, 5.054286?units=si')
  .then((response) => {
    return response.json();
  })


  .then((myJson) => {
    console.log(myJson);
    var para = document.createElement("p");
    var node = document.createTextNode(myJson.currently.temperature);
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
  });

/*
  .then((myJson) => {
    console.log(myJson);
  });
*/
/*var para = document.createElement("p")
var text = document.createTextNode("Hoi")
createp.appendChild(text);
document.getElementById("temp")
*/
