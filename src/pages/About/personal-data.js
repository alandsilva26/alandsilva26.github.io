import React from "react";

//icons
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

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
            content={props.game}
          ></ListItemPersonalData>
        )}
        <ListItemPersonalData content={myData.location}>
          <MdLocationOn />
        </ListItemPersonalData>
        <ListItemPersonalData content={email}>
          <HiOutlineMail />
        </ListItemPersonalData>
      </ul>
    </div>
  );
}

function ListItemPersonalData({ children, content, extra }) {
  const classAppend = extra !== undefined ? extra : "";
  return (
    <li className="list-group-item ">
      <h6 className="cell-group">
        <div className="cell">{children}</div>
        <div className={"cell" + classAppend}>
          &nbsp;
          {content}
        </div>
      </h6>
    </li>
  );
}

export default PersonalData;
