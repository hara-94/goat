window.onload = () => {
  const trigger = document.getElementById("js-access-map");
  const overlay = document.getElementById("js-access-tablet-map-overlay")
  const tabletMap = document.getElementById("js-access-tablet-map");
  console.log(tabletMap)

  trigger.addEventListener("click", () => {
    tabletMap.classList.add("show");
  });

  overlay.addEventListener("click", () => {
    tabletMap.classList.remove("show");
  })
}
