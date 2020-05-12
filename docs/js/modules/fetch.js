import {
  DSurlBuilder
} from "./urlbuilder.js";
import {
  GIurlBuilder
} from "./urlbuilder.js";


export function fetchWeather(location) {
  fetch(DSurlBuilder(location))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      //if the response isn't OK (200), reject the response
      else {
        return Promise.reject(response)
      }
    })

    //Create an object using data from our API call
    .then((myJson) => {

      console.log(myJson);
      var manySunny = myJson.hourly.data.filter(function(thenSunny){
        return thenSunny.summary == "Clear"
      })
      console.log("De komende 48 uur is het " + manySunny.length + " uur zonnig")

      var allTemp = myJson.hourly.data.map(function (thenTemp) {
        return thenTemp.temperature
      });
      var totalTemp = allTemp.reduce(function(accumalator, temp){
        return accumalator + temp
      })
      var averageTemp = totalTemp / 48
      console.log("The average temp next 24h is: " + averageTemp)
      const weatherValues = {
        "Graden (c)": myJson.currently.temperature,
        "Regen intensiteit(mm/uur)": myJson.currently.precipIntensity,
        "Kans op regen (%)": myJson.currently.precipProbability,
        "Opsomming": myJson.currently.summary,
        "Gemiddelde temperatuur(48h): ": averageTemp,
        "Uren zon de komende 48 uur: ": manySunny.length
      }
      
      //Loop for each key-value pair in our object and insert these into our HTML
      for (let [key, value] of Object.entries(weatherValues)) {
        console.log(`${key}: ${value}`)
        var weatherDisplay = document.querySelector(".weatherDisplay")
        weatherDisplay.insertAdjacentHTML("afterend", `<p>${key}: ${value}</p>`)
      }
    })
}

export function fetchGif() {
  fetch(GIurlBuilder())
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      //if the response isn't OK (200), reject the response
      else {
        return Promise.reject(response)
      }
    })

    .then((gifJson) => {
      console.log(gifJson)
      console.log(gifJson.data[0].slug)
      for (var i = 0; i < gifJson.data.length; i++) {
        let gifdisplay = document.getElementById("div3")
        gifdisplay.insertAdjacentHTML("afterend", `<img class="giphyImage" src="https://i.giphy.com/media/${gifJson.data[i].id}/giphy.webp">`)
      }
    })

    //Basic error handling for debugging purpouses
    .catch((err) => {
      console.log("An error occured - ", err)
    })
}