import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  route: string;
  name: string;
}

const NavbarItem = ({ route, name }: IProps): JSX.Element => {
  return (
    <li className="nav-item">
      <Link to={route} className="nav-link">
        {name}
      </Link>
    </li>
  );
};

export default NavbarItem;
