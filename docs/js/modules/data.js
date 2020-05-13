import {
  DSurlBuilder
} from "./urlbuilder.js";

export function fetchWeather(location) {
  //add loading state when fetch starts
  document.querySelector(".loader").classList.remove("invisible")
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
      //filter for sunny hours in the next 48 hours from json
      var manySunny = myJson.hourly.data.filter(function (thenSunny) {
        return thenSunny.summary == "Clear"
      })
      console.log("De komende 48 uur is het " + manySunny.length + " uur zonnig")
      //map all of the temperature readings for the next 48 hours
      var allTemp = myJson.hourly.data.map(function (thenTemp) {
        return thenTemp.temperature
      });
      //reduce all the temp readings from the next 48 hours to one number
      var totalTemp = allTemp.reduce(function (accumalator, temp) {
        return accumalator + temp
      })
      //devide the total temp in the next 48 hours to an average
      var averageTemp = totalTemp / 48
      console.log("The average temp next 24h is: " + averageTemp)
      //store all the needed variables from our fetch
      var weatherValues = {
        temp: myJson.currently.temperature,
        rainIntensity: myJson.currently.precipIntensity,
        rainProbab: myJson.currently.precipProbability,
        summary: myJson.currently.summary,
        average: averageTemp,
        sunnyHours: manySunny.length
      }
      //remove loading state when fetch finishes
      document.querySelector(".loader").classList.add("invisible")
      console.log(weatherValues)
      Transparency.render(document.querySelector('.container'), weatherValues)
    })
}