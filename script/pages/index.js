const windowHeight = window.innerHeight;

const concept = document.getElementById("js-concept");
const game = document.getElementById("js-game");
const drink = document.getElementById("js-drink");
const access = document.getElementById("js-access");

function showSection(section) {
  const offsetTop = section.offsetTop;
  const currentOffsetY = window.scrollY;
  if (currentOffsetY > offsetTop - (windowHeight * 0.7)) {
    section.classList.add("js-section--shown")
  }
}

window.addEventListener("scroll", () => {
  showSection(concept);
  showSection(game);
  showSection(drink);
  showSection(access);
});
