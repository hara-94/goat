import { switchVideo } from "./main-visual.js";
import { controlNavigationLink } from "./navigaton.js";
import { controlHamburger } from "./hamburger.js";
import { controlMenu } from "./menu.js";
import { controlTabletMap } from "./map.js";

const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

// 画面のサイズ変動があった時に高さを再計算する
window.addEventListener("resize", setFillHeight);

// 初期化
setFillHeight();

window.onload = () => {
  switchVideo();
  controlNavigationLink();
  controlHamburger();
  controlMenu();
  controlTabletMap();
};
