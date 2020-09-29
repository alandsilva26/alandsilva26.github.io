// console.log("HELLO");

window.onload = () => {
  const base = document.getElementsByClassName("header--home-overlay");

  window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;

    base[0].style.backgroundPositionY = offset * 0.2 + "px";
    base[1].style.backgroundPositionY = offset * 0.3 + "px";
    base[2].style.backgroundPositionY = offset * 0.4 + "px";
    base[3].style.backgroundPositionY = offset * 0.3 + "px";
  });
};
