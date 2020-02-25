export function nice(){


routie({
  "detail": () => {
    updateUI('detail');
  },
  "home": () => {
    updateUI('home');
  }
});

}

//update sections by removing all of the active classes and adding it to one
function updateUI(route) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.querySelector(`[data-route=${route}]`).classList.add('active')

//    activeSection = document.querySelector(`[data-route=${route}]`);
//     activeSection.classList.add('active');
  }