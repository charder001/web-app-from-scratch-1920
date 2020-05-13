import {
  fetchWeather
} from "./fetch.js";

var location

//routie.js handling routing in the app
export function router() {
  routie({
    "amsterdam": () => {
      location = "52.3702157, 4.8951679"
      updateUI('amsterdam');
    },
    "weesp": () => {
      location = "52.3080507, 5.0406217"
      updateUI('weesp');

    },
    "home": () => {
      updateUI('home');
    }
  });
}

//update sections by removing all of the active classes and adding it to one
function updateUI(route) {
    if (route != 'home') {
    fetchWeather(location)
    }
  
  var sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.classList.remove('active', "container");
  });

  document.querySelector(`[data-route=${route}]`).classList.add('active', "container")

}
