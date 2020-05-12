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
      const weatherValues = {
        "Graden (c)": myJson.currently.temperature,
        "Regen intensiteit(mm/uur)": myJson.currently.precipIntensity,
        "Kans op regen (%)": myJson.currently.precipProbability,
        "Opsomming": myJson.currently.summary
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