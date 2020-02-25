import { DSurlBuilder } from "./urlbuilder.js";
import { GIurlBuilder } from "./urlbuilder.js";

export function fetchWeather(){
fetch(DSurlBuilder())
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
    const data = JSON.parse(myJson)
    console.log(data)
     console.log(myJson);
     const weatherValues = {
       Temperature: myJson.currently.temperature,
       precipIntensity: myJson.currently.precipIntensity,
       precipProbability: myJson.currently.precipProbability
     }
     //Loop for each key-value pair in our object and insert these into our HTML
     for (let [key, value] of Object.entries(weatherValues)) {
       console.log(`${key}: ${value}`)
       let para = document.createElement("p");
       let node = document.createTextNode(`${key}: ${value}`);
       para.appendChild(node);
       let element = document.getElementById("div1");
       element.appendChild(para);
     }
     
    //  var dailyForecast = myJson.map(function (forecast){
    //     return myJson.currently.temperature
    //  });
    //  console.log(dailyforecast)
   })
}

export function fetchGif(){
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
     let gifs = {
       gifUrl: gifJson.data.image_url
     }
     console.log(gifs.gifUrl)
     let gifdisplay = document.getElementById("div2")
     console.log(gifdisplay)
     gifdisplay.insertAdjacentHTML("afterend", `<img src="${gifs.gifUrl}">`)
     let detailgifdisplay = document.getElementById("div3")
     detailgifdisplay.insertAdjacentHTML("afterend", `<img src="${gifs.gifUrl}">`)
   })

   //Basic error handling for debugging purpouses
   .catch((err) => {
     console.log("An error occured - ", err)
   })
}