import React from "react";

import { SiCodechef, SiHackerrank } from "react-icons/si";
import { FaSteam } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import myData from "../../../data/my-data";

function SocialLinks() {
  const { github, linkedin, codechef, hackerrank, steam } = myData;
  const githubLink = "https://github.com/" + github;

  return (
    <div className="col-12 col-md-10">
      <ul className="list-group social-data">
        <ListItemSocialData
          prefixUrl={linkedin}
          postfixUrl=""
          content="Linkedin"
        >
          <AiFillLinkedin />
        </ListItemSocialData>
        <ListItemSocialData
          prefixUrl=""
          postfixUrl={githubLink}
          content={github}
        >
          <AiFillGithub />
        </ListItemSocialData>
        <ListItemSocialData
          prefixUrl="https://www.codechef.com/users/"
          postfixUrl={codechef}
          content={codechef}
        >
          <SiCodechef />
        </ListItemSocialData>
        <ListItemSocialData
          prefixUrl="https://www.hackerrank.com/"
          postfixUrl={hackerrank}
          content={hackerrank}
        >
          <SiHackerrank />
        </ListItemSocialData>
        <ListItemSocialData
          prefixUrl="https://steamcommunity.com/id/"
          postfixUrl={steam}
          content={steam}
        >
          <FaSteam />
        </ListItemSocialData>
      </ul>
    </div>
  );
}

interface ListItemProps {
  prefixUrl: string;
  postfixUrl: string;
  children: JSX.Element;
  content: string;
}

function ListItemSocialData({
  prefixUrl,
  postfixUrl,
  children,
  content,
}: ListItemProps) {
  return (
    <li className="list-group-item">
      <a className="cell-group" href={prefixUrl + postfixUrl}>
        <div className="cell">{children}</div>
        {/* <div className="cell"> &nbsp;{content}</div> */}
      </a>
    </li>
  );
}

export default SocialLinks;
