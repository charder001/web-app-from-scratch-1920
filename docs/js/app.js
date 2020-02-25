import { fetchWeather } from "./modules/fetch.js";
import { fetchGif } from "./modules/fetch.js";
import { router } from "./modules/updateUI.js";


fetchWeather()
fetchGif()
router()

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

