import React from "react";
// import headerImage from "%PUBLIC_URL%/images/astro.jpg";

function Header() {
  console.log(process.env.PUBLIC_URL);
  console.log(process.env.PUBLIC_URL + "/images/astro.jpg");
  return (
    <header>
      <div
        className="home--header-overlay"
        style={{
          backgroundImage: `url("images/astro.jpg")`,
        }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>Hi my name is</div>
            <h1>Alan Dsilva</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
