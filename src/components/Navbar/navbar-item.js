import React from "react";
import { Link } from "react-router-dom";

function NavbarItem({ route, name }) {
  return (
    <li className="nav-item">
      <Link to={route} className="nav-link">
        {name}
      </Link>
    </li>
  );
}

export default NavbarItem;
