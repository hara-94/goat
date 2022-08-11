export function controlHamburger() {
  const html = document.querySelector("html");

  const hamburger = document.getElementById("js-hamburger");
  const openButton = document.getElementById("js-hamburger-open");
  const closeButton = document.getElementById("js-hamburger-close");

  const conceptLink = document.getElementById("js-hamburger-concept");
  const drinkLink = document.getElementById("js-hamburger-drink");
  // const gameLink = document.getElementById("js-hamburger-game");
  const accessLink = document.getElementById("js-hamburger-access");

  const conceptSection = document.getElementById("js-concept-section");
  const accessSection = document.getElementById("js-access-section");

  const items = [
    conceptLink, 
    drinkLink, 
    // gameLink, 
    accessLink
  ];

  let scrollY = 0;

  openButton?.addEventListener("click", () => {
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

  closeButton?.addEventListener("click", () => {
    html.classList.remove("fixed");
    window.scrollTo({ top: scrollY });
    hamburger.classList.add("close");
    hamburger.classList.remove("open");
    items.forEach(item => {
      item.classList.remove("show");
    });
  });

  conceptLink?.addEventListener("click", (event) => {
    event.preventDefault();
    html.classList.remove("fixed");
    hamburger.classList.add("close");
    hamburger.classList.remove("open");
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
      hamburger.classList.add("close");
      hamburger.classList.remove("open");
      window.scrollTo({
        top: window.scrollY + accessSection.getBoundingClientRect().top - 40,
        behavior: "smooth"
      });
    }
  })
}
