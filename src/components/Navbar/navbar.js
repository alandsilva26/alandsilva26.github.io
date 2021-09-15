import React from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./navbar-item";
import routes from "../../config/routes";
import { HiMenu } from "react-icons/hi";

//assets
import logo from "../../images/favicon-32x32.png";

function Navbar(props) {
  const navbarItems = routes.map((route, index) => {
    return route.name != null ? (
      <NavbarItem key={index} route={route.path} name={route.name} />
    ) : null;
  });
  return (
    <nav className="navbar navbar-expand-sm">
      <Link to="/" className="navbar-brand pl-5">
        <img className="brand-image" src={logo} alt="website logo" /> &nbsp;Alan
        Dsilva
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <HiMenu />
        {/* GiHamburgerMenu
        <span className="navbar-toggler-icon"></span> */}
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto pr-5">{navbarItems}</ul>
      </div>
    </nav>
  );
}

export default Navbar;
