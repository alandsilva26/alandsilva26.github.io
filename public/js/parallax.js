// console.log("HELLO");

console.log(window.location.href);

if (
  window.location.href === "https://alandsilva.netlify.app" ||
  window.location.href === "http://localhost:3000"
) {
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
}
