// console.log("HELLO");

console.log(window.location.href);

console.error = function () {};

window.onload = () => {
  const base = document.getElementsByClassName("header--home-overlay");

  const parallaxScroll = () => {
    let offset = window.pageYOffset;
    if (window.location.href == "http://localhost:3000/") {
      base[0].style.backgroundPositionY = offset * 0.2 + "px";
      base[1].style.backgroundPositionY = offset * 0.3 + "px";
      base[2].style.backgroundPositionY = offset * 0.4 + "px";
      base[3].style.backgroundPositionY = offset * 0.3 + "px";
    }
  };

  window.addEventListener("scroll", parallaxScroll);
};
