import React from "react";
import Spinner from "../../components/spinner";
import { ProjectContext } from "../../project-context";
import myData from "../../data/my-data";

import SocialLinks from "./social-links";
import PersonalData from "./personal-data";
import Technical from "./technical";
import AboutPageHeader from "./AboutPageHeader";

class About extends React.Component {
  static contextType = ProjectContext;

  render() {
    const loading = false;
    const { steamProfile } = this.context;

    return (
      <>
        <AboutPageHeader />
        <div className="about">
          <div className="container py-5">
            {loading ? <Spinner /> : <Profile steam={steamProfile} />}
          </div>
        </div>
      </>
    );
  }
}

function Profile({ steam }) {
  return (
    <>
      {/* row 1 begins */}

      <div className="row text-break">
        <div className="avatar-group col-4 col-md-2">
          <div className="avatar">
            <img
              className={steam.gameid !== undefined && "ingame"}
              src={myData.avatarUrl}
              alt="Alan Dsilva"
            />
          </div>
        </div>
        <PersonalData game={steam.gameextrainfo} />
        <SocialLinks />
      </div>

      {/* row 1 ends */}

      {/* row 2 begins */}

      <div className="row">
        <div className="col-12 col-md-10">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;{myData.description}</p>
        </div>
      </div>

      <Technical />
      {/* row 2 ends */}
    </>
  );
}

export default About;
