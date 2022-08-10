export function controlHamburger() {
  const html = document.querySelector("html");

  const hamburger = document.getElementById("js-hamburger");
  const openButton = document.getElementById("js-hamburger-open");
  const closeButton = document.getElementById("js-hamburger-close");

  const concept = document.getElementById("js-hamburger-concept");
  const drink = document.getElementById("js-hamburger-drink");
  const game = document.getElementById("js-hamburger-game");
  const access = document.getElementById("js-hamburger-access");

  const items = [concept, drink, game, access];

  let scrollY = 0;

  openButton.addEventListener("click", () => {
    scrollY = window.scrollY;
    html.classList.add("fixed");
    hamburger.classList.add("open");
    hamburger.classList.remove("close");

    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, 200 * index);
    });
  });

  closeButton.addEventListener("click", () => {
    html.classList.remove("fixed");
    window.scrollTo({ top: scrollY });
    hamburger.classList.add("close");
    hamburger.classList.remove("open");
    items.forEach(item => {
      item.classList.remove("show");
    });
  })
}
