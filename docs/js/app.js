import {
  fetchGif
} from "./modules/fetch.js";
import {
  router
} from "./modules/updateUI.js";


fetchGif()
router()

//transparency templating engine
const footer = document.querySelector('footer');
const data = {
  text: 'Trademark @charder001 on github'
};

setTimeout(renderTemplate(footer, data), 1000);

// Transparency
function renderTemplate(element, data) {
  return () => {
    Transparency.render(element, data);
  };
}
