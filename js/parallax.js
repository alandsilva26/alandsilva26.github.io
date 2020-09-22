// console.log("HELLO");

window.onload = () => {
  // console.log("JDL");
  const parallax = document.getElementsByClassName("home--header-overlay")[0];

  window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    // console.log(window.pageYOffset);
    parallax.style.backgroundPositionY = offset * 0.4 + "px";
  });
};
