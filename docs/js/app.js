const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://api.darksky.net/forecast/";
const key = "39269c07a47ba71c7c9af7ee9e8415fd/";
const coordinates = "37.8267,-122.4233";
const celcius = "?units=si";
const url = cors + endpoint + key + coordinates + celcius;
fetch(url)
  .then((response) => {
    if (response.ok)  {
    return response.json();
    } else {
      return Promise.reject(response)
    }
  })

  .then((myJson) => {
    console.log(myJson);
    var weatherValues = {
      temperature: myJson.currently.temperature,
      precipIntensity: myJson.currently.precipIntensity,
      precipProbability: myJson.currently.precipProbability
    }

    for (let [key, value] of Object.entries(weatherValues)){
      console.log(`${key}: ${value}`)
      var para = document.createElement("p");
      var node = document.createTextNode(`${key}: ${value}`);
      para.appendChild(node);
      var element = document.getElementById("div1");
      element.appendChild(para);      
      // var p = document.getElementById("p1")
      // p.insertAdjacentText("afterend",  `${key}: ${value}`)
    }

  }) .catch ((err) => {
    console.log("An error occured - ", err)
  })


  