export function controlMenu() {
  const menuSoftdrink = document.getElementById("menu-softdrink");
  const menuAlcohol = document.getElementById("menu-alcohol");
  const menuChampagne = document.getElementById("menu-champagne");
  const menuFood = document.getElementById("menu-food");

  const contentSoftdrink = document.getElementById("content-softdrink");
  const contentAlcohol = document.getElementById("content-alcohol");
  const contentChampagne = document.getElementById("content-champagne");
  const contentFood = document.getElementById("content-food");
  
  const tabs = [menuSoftdrink, menuAlcohol, menuChampagne, menuFood];
  const contents = [contentSoftdrink, contentAlcohol, contentChampagne, contentFood];

  function switchTab(target) {
    tabs.forEach((tab) => { tab.classList.remove("js-selected") });
    target.classList.add("js-selected");
  }

  function switchContent(target) {
    contents.forEach((content) => { content.classList.remove("show") });
    target.classList.add("show");
  }
  
  menuSoftdrink?.addEventListener("click", (e) => {
    switchTab(e.target);
    switchContent(contentSoftdrink);
  });
  
  menuAlcohol?.addEventListener("click", (e) => {
    switchTab(e.target);
    switchContent(contentAlcohol);
  });
  menuChampagne?.addEventListener("click", (e) => {
    switchTab(e.target);
    switchContent(contentChampagne);
  });
  menuFood?.addEventListener("click", (e) => {
    switchTab(e.target);
    switchContent(contentFood);
  });
}
