import React from "react";

//icons
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BiBuildingHouse } from "react-icons/bi";

import myData from "../../data/my-data";

function PersonalData(props) {
  const { email } = myData;
  return (
    <div className="col-8 col-md-6">
      <h4>{myData.name}</h4>
      <ul className="list-group personal-data">
        {props.game && (
          <ListItemPersonalData
            extra="game"
            content={"Playing " + props.game}
          ></ListItemPersonalData>
        )}
        <ListItemPersonalData content={myData.location}>
          <MdLocationOn />
        </ListItemPersonalData>
        <ListItemPersonalData content={email}>
          <HiOutlineMail />
        </ListItemPersonalData>
        <ListItemPersonalData
          content={"St. Francis Institute of Technology"}
          link={"https://www.sfit.ac.in/"}
        >
          <BiBuildingHouse />
        </ListItemPersonalData>
      </ul>
    </div>
  );
}

function ListItemPersonalData({ children, content, extra, link }) {
  const classAppend = extra !== undefined ? extra : "";
  return (
    <li className="list-group-item ">
      <h6 className="cell-group">
        <div className="cell">{children}</div>
        <div className={"cell" + classAppend}>
          &nbsp;
          {link !== undefined && link !== "" ? (
            <a href={link}>{content}</a>
          ) : (
            content
          )}
        </div>
      </h6>
    </li>
  );
}

export default PersonalData;
