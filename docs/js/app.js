//url builder darksky
const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://api.darksky.net/forecast/";
const key = "39269c07a47ba71c7c9af7ee9e8415fd/";
let coordinates = "37.8267,-122.4233";
const celcius = "?units=si";
const url = cors + endpoint + key + coordinates + celcius;

//fetching data from API
fetch(url)
  .then((response) => {
    if (response.ok)  {
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
    var weatherValues = {
      temperature: myJson.currently.temperature,
      precipIntensity: myJson.currently.precipIntensity,
      precipProbability: myJson.currently.precipProbability
    }
    //Loop for each key-value pair in our object and insert these into our HTML
    for (let [key, value] of Object.entries(weatherValues)){
      console.log(`${key}: ${value}`)
      var para = document.createElement("p");
      var node = document.createTextNode(`${key}: ${value}`);
      para.appendChild(node);
      var element = document.getElementById("div1");
      element.appendChild(para);      
    }

  }) 

  
//url builder giphy

const gifendpoint = "https://api.giphy.com/v1/gifs/random?";
let gifkey = "api_key=PjKmqmgJFf8rU0K7z9Z7t7hTeNUZBnbk";
let giftag = "&tag=sun"
const gifurl = gifendpoint + gifkey + giftag;

fetch(gifurl)
.then((response) => {
  if (response.ok)  {
  return response.json();
  } 
  //if the response isn't OK (200), reject the response
  else {
    return Promise.reject(response)
  }
})

.then((gifjson) => {
  console.log(gifjson)
  var gifs = { 
    gifurl: gifjson.data.image_url
  }
  console.log(gifs.gifurl)
  var gifdisplay = document.getElementById("div2")
  gifdisplay.insertAdjacentHTML("afterend", `<img src="${gifs.gifurl}">`)
  var gifdisplay = document.getElementById("div3")
  gifdisplay.insertAdjacentHTML("afterend", `<img src="${gifs.gifurl}">`)
})

//Basic error handling for debugging purpouses
.catch ((err) => {
    console.log("An error occured - ", err)
  })


const sections = document.querySelectorAll("section");

//routing using the routie micro library
// routie({
//   network: () => {
//     updateUI("detail");
//   }
// })

routie({
  //#giphy/425367
  'giphy/:id': id => {
    console.log(id);
  },
  detail: () => {
    updateUI('detail');
  },
  home: () => {
    updateUI('home');
  }
});


// updateUI((route) => {
//   sections.forEach(section => {
//     section.classList.remove("active")
//   });
//   activeSection = document.querySelector(`[data-route=$(route)]`);
//   console.log(activeSection);
//   activeSection.classList.add("active");
// })

function updateUI(route) {
  sections.forEach(section => {
    section.classList.remove('active');
  });
  activeSection = document.querySelector(`[data-route=${route}]`);
  console.log(activeSection);
  activeSection.classList.add('active');
}