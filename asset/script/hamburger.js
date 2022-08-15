export function controlHamburger() {
  const html = document.querySelector("html");

  const hamburger = document.getElementById("js-hamburger");
  const button = document.getElementById("js-hamburger-button");

  const topBar = document.getElementById("js-hamburger-top-bar");
  const middleBar = document.getElementById("js-hamburger-middle-bar");
  const bottomBar = document.getElementById("js-hamburger-bottom-bar");

  const conceptLink = document.getElementById("js-hamburger-concept-link");
  const drinkLink = document.getElementById("js-hamburger-drink-link");
  // const gameLink = document.getElementById("js-hamburger-game-link");
  const accessLink = document.getElementById("js-hamburger-access-link");

  const conceptSection = document.getElementById("js-concept-section");
  const accessSection = document.getElementById("js-access-section");

  let scrollY = 0;

  function showHamburger() {
    hamburger.classList.add("show");
    hamburger.classList.remove("hide");
    topBar.classList.add("show");
    middleBar.classList.add("show");
    bottomBar.classList.add("show");
    topBar.classList.remove("hide");
    middleBar.classList.remove("hide");
    bottomBar.classList.remove("hide");
  }

  function hideHamburger() {
    hamburger.classList.add("hide");
    hamburger.classList.remove("show");
    topBar.classList.add("hide");
    middleBar.classList.add("hide");
    bottomBar.classList.add("hide");
    topBar.classList.remove("show");
    middleBar.classList.remove("show");
    bottomBar.classList.remove("show");
  }

  button?.addEventListener("click", () => {
    if (hamburger.classList.contains("show")) {
      html.classList.remove("fixed");
      window.scrollTo({ top: scrollY });
      hideHamburger();
    } else {
      scrollY = window.scrollY;
      html.classList.add("fixed");
      showHamburger();
    }
  });

  conceptLink?.addEventListener("click", (event) => {
    event.preventDefault();
    html.classList.remove("fixed");
    hideHamburger();
    window.scrollTo({ top: scrollY });
    if (conceptSection) {
      window.scrollTo({
        top: window.scrollY + conceptSection.getBoundingClientRect().top - 40,
        behavior: "smooth"
      });
    }
  });

  accessLink?.addEventListener("click", (event) => {
    event.preventDefault();
    if (accessSection) {
      html.classList.remove("fixed");
      hideHamburger();
      window.scrollTo({
        top: window.scrollY + accessSection.getBoundingClientRect().top - 40,
        behavior: "smooth"
      });
    }
  })
}
