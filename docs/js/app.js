// fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/39269c07a47ba71c7c9af7ee9e8415fd/52.308262, 5.054286?units=si')
//   .then((response) => {
//     return response.json();
//   })

//   .then((myJson) => {
//     console.log(myJson);
//     var para = document.createElement("p");
//     var node = document.createTextNode(myJson.currently.temperature);
//     para.appendChild(node);
//     var element = document.getElementById("div1");
//     element.appendChild(para);
//   })

  
fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/39269c07a47ba71c7c9af7ee9e8415fd/37.8267,-122.4233`)
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
  })

    // .then((myJson) => {
  //   console.log(myJson);
  //   var para = document.createElement("p");
  //   var node = document.createTextNode(myJson.currently.temperature);
  //   para.appendChild(node);
  //   var element = document.getElementById("div1");
  //   element.appendChild(para);
  // });

  