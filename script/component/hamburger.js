const bars = {
  top: document.getElementById("js-hamburger-icon-top"),
  bottom: document.getElementById("js-hamburger-icon-bottom")
}

const icon = document.getElementById("js-hamburger-icon");
const close = document.getElementById("js-hamburger-close");
const hamburger = document.getElementById("js-header-hamburger");
const hamburgerItem = document.getElementsByClassName("js-hamburger-item");
const hamburgerItems = [...hamburgerItem];

icon.addEventListener("click", () => {
  hamburger.classList.remove("js-hamburger--close");
  icon.classList.remove("js-hamburger-icon--close");
  bars.top.classList.remove("js-hamburger-top-bar--close");
  bars.bottom.classList.remove("js-hamburger-bottom-bar--close");

  bars.top.classList.add("js-hamburger-bar--open");
  bars.bottom.classList.add("js-hamburger-bar--open");
  icon.classList.add("js-hamburger-icon--open");
  hamburger.classList.add("js-hamburger--open");
  hamburgerItems.forEach((elm, index) => {
    setTimeout(() => {
      elm.classList.add("js-hamburger-item--shown");
    }, 150 * index);
  });
});

close.addEventListener("click", () => {
  hamburger.classList.remove("js-hamburger--open");
  icon.classList.remove("js-hamburger-icon--open");
  bars.top.classList.remove("js-hamburger-bar--open");
  bars.bottom.classList.remove("js-hamburger-bar--open");
  hamburgerItems.forEach((elm, index) => {
    elm.classList.remove("js-hamburger-item--shown");
  });

  hamburger.classList.add("js-hamburger--close");
  icon.classList.add("js-hamburger-icon--close");
  bars.top.classList.add("js-hamburger-top-bar--close");
  bars.bottom.classList.add("js-hamburger-bottom-bar--close");
});