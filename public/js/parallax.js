// console.log("HELLO");

console.error = function () {};

window.onload = () => {
  const base = document.getElementsByClassName("header--home-overlay");
  const projectsBase = document.getElementsByClassName("projects--background-image");

  const parallaxScroll = () => {
    let offset = window.pageYOffset;
    base[0].style.backgroundPositionY = offset * 0.2 + "px";
    base[1].style.backgroundPositionY = offset * 0.3 + "px";
    base[2].style.backgroundPositionY = offset * 0.4 + "px";
    base[3].style.backgroundPositionY = offset * 0.3 + "px";
  };

  const parallaxScrollProjects = () => {
    let offset = window.pageYOffset;
    projectsBase[0].style.backgroundPositionY = offset * 0.9 + "px";
  }

  window.addEventListener("scroll", parallaxScroll);
  window.addEventListener("scroll", parallaxScrollProjects);
};
