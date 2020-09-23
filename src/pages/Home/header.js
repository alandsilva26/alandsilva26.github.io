import React from "react";
import { homeHeaderImage } from "../../data/media";

function Header() {
  return (
    <header>
      <div
        className="home--header-overlay"
        style={{
          backgroundImage: `url(${homeHeaderImage})`,
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
