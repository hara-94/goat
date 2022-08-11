export function controlNavigationLink() {
  const conceptLink = document.getElementById("js-concept-link");
  const accessLink = document.getElementById("js-access-link");

  const conceptSection = document.getElementById("js-concept-section");
  const accessSection = document.getElementById("js-access-section");


  conceptLink?.addEventListener("click", (event) => {
    event.preventDefault();
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
      window.scrollTo({
        top: window.scrollY + accessSection.getBoundingClientRect().top - 40,
        behavior: "smooth"
      });
    }
  });
}
