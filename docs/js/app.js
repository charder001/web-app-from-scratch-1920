 DSurlBuilder = () => {
   const cors = "https://cors-anywhere.herokuapp.com/";
   const endpoint = "https://api.darksky.net/forecast/";
   const key = "39269c07a47ba71c7c9af7ee9e8415fd/";
   let coordinates = "37.8267,-122.4233";
   const celcius = "?units=si";
   const url = cors + endpoint + key + coordinates + celcius;
   return url;
 }

 //fetching data from API
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
     console.log(myJson);
     let weatherValues = {
       temperature: myJson.currently.temperature,
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

   })

 GIurlBuilder = () => {
   const gifendpoint = "https://api.giphy.com/v1/gifs/random?";
   let gifkey = "api_key=PjKmqmgJFf8rU0K7z9Z7t7hTeNUZBnbk";
   let giftag = "&tag=sun"
   const gifurl = gifendpoint + gifkey + giftag;
   return gifurl;
 }

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

   .then((gifjson) => {
     console.log(gifjson)
     let gifs = {
       gifurl: gifjson.data.image_url
     }
     console.log(gifs.gifurl)
     let gifdisplay = document.getElementById("div2")
     console.log(gifdisplay)
     gifdisplay.insertAdjacentHTML("afterend", `<img src="${gifs.gifurl}">`)
     let detailgifdisplay = document.getElementById("div3")
     detailgifdisplay.insertAdjacentHTML("afterend", `<img src="${gifs.gifurl}">`)
   })

   //Basic error handling for debugging purpouses
   .catch((err) => {
     console.log("An error occured - ", err)
   })


 const sections = document.querySelectorAll("section");

 routie({
   detail: () => {
     updateUI('detail');
   },
   home: () => {
     updateUI('home');
   }
 });


 function updateUI(route) {
   sections.forEach(section => {
     section.classList.remove('active');
   });
   activeSection = document.querySelector(`[data-route=${route}]`);
   activeSection.classList.add('active');
 }