export function controlTabletMap() {
  const trigger = document.getElementById("js-access-map");
  const overlay = document.getElementById("js-access-tablet-map-overlay")
  const tabletMap = document.getElementById("js-access-tablet-map");

  trigger?.addEventListener("click", () => {
    tabletMap.classList.add("show");
  });

  overlay?.addEventListener("click", () => {
    tabletMap.classList.remove("show");
  });
}
