import React from "react";
import myData from "../data/my-data";

import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

function SocialChips() {
  // As this data is going to be static throughout I did not use firebase to retrieve my social data and instead used local data files

  const { github, linkedin, email } = myData;

  return (
    <div className="social-icons">
      <div>
        <a href={github}>
          <AiOutlineGithub />
        </a>
      </div>
      <div>
        <a href={linkedin}>
          <AiOutlineLinkedin />
        </a>
      </div>
      <div>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineMail />
        </a>
      </div>
    </div>
  );
}

export default SocialChips;
