// import { nice } from "./modules/urlbuilder.js"

// var DSurlBuilder = () => {
//   const cors = "https://cors-anywhere.herokuapp.com/";
//   const endpoint = "https://api.darksky.net/forecast/";
//   const key = "39269c07a47ba71c7c9af7ee9e8415fd/";
//   let coordinates = "37.8267,-122.4233";
//   const celcius = "?units=si";
//   const url = cors + endpoint + key + coordinates + celcius;
//   return url;
// }

//fetching data from API
// fetch(DSurlBuilder())
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     //if the response isn't OK (200), reject the response
//     else {
//       return Promise.reject(response)
//     }
//   })

//    //Create an object using data from our API call
//    .then((myJson) => {
//      console.log(myJson);
//      const weatherValues = {
//        temperature: myJson.currently.temperature,
//        precipIntensity: myJson.currently.precipIntensity,
//        precipProbability: myJson.currently.precipProbability
//      }
//      //Loop for each key-value pair in our object and insert these into our HTML
//      for (let [key, value] of Object.entries(weatherValues)) {
//        console.log(`${key}: ${value}`)
//        let para = document.createElement("p");
//        let node = document.createTextNode(`${key}: ${value}`);
//        para.appendChild(node);
//        let element = document.getElementById("div1");
//        element.appendChild(para);
//      }

//    })

//  var GIurlBuilder = () => {
//    const gifEndpoint = "https://api.giphy.com/v1/gifs/random?";
//    let gifKey = "api_key=PjKmqmgJFf8rU0K7z9Z7t7hTeNUZBnbk";
//    let gifTag = "&tag=sun"
//    const gifUrl = gifEndpoint + gifKey + gifTag;
//    return gifUrl;
//  }

//  fetch(GIurlBuilder())
//    .then((response) => {
//      if (response.ok) {
//        return response.json();
//      }
//      //if the response isn't OK (200), reject the response
//      else {
//        return Promise.reject(response)
//      }
//    })

//    .then((gifJson) => {
//      console.log(gifJson)
//      let gifs = {
//        gifUrl: gifJson.data.image_url
//      }
//      console.log(gifs.gifUrl)
//      let gifdisplay = document.getElementById("div2")
//      console.log(gifdisplay)
//      gifdisplay.insertAdjacentHTML("afterend", `<img src="${gifs.gifUrl}">`)
//      let detailgifdisplay = document.getElementById("div3")
//      detailgifdisplay.insertAdjacentHTML("afterend", `<img src="${gifs.gifUrl}">`)
//    })

//    //Basic error handling for debugging purpouses
//    .catch((err) => {
//      console.log("An error occured - ", err)
//    })


import { fetchWeather } from "./modules/fetch.js";
import { fetchGif } from "./modules/fetch.js";
import { nice } from "./modules/updateUI.js";


fetchWeather()
fetchGif()
nice()


//  const sections = document.querySelectorAll("section");

//  routie({
//    detail: () => {
//      updateUI('detail');
//    },
//    "": () => {
//      updateUI('home');
//    }
//  });

// //update sections by removing all of the active classes and adding it to one
//  function updateUI(route) {
//    sections.forEach(section => {
//      section.classList.remove('active');
//    });
//    activeSection = document.querySelector(`[data-route=${route}]`);
//    activeSection.classList.add('active');
//  }

//transparency templating engine
const footer = document.querySelector('footer');
const data = {
  title: 'Developer Tools',
  text: '... are totally wicked 🦄'
};

setTimeout(renderTemplate(footer, data), 1000);

// Transparency
function renderTemplate(element, data) {
  return () => {
    Transparency.render(element, data);
  };
}

