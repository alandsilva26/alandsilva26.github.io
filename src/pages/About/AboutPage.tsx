import React from "react";
import { ProjectContext } from "../../context/project-context";
import myData from "../../data/my-data";
import Navbar from "../../components/Navbar/Navbar";
import SocialLinks from "./components/SocialLinks";
import PersonalData from "./components/PersonalData";
import Technical from "./components/Technical";

class AboutPage extends React.Component {
  static contextType = ProjectContext;

  render() {
    const { steamProfile } = this.context;

    return (
      <>
        <header>
          <Navbar />
        </header>
        <div className="about">
          <div className="container py-5">
            <Profile steam={steamProfile} />
          </div>
        </div>
      </>
    );
  }
}

interface ISteam {
  steam: {
    gameid?: string | undefined;
    gameextrainfo: string;
  };
}

function Profile({ steam }: ISteam) {
  return (
    <>
      {/* row 1 begins */}

      <div className="row text-break">
        <div className="avatar-group col-4 col-md-2">
          <div className="avatar">
            <img
              className={steam.gameid && "ingame"}
              // src={myData.avatarUrl}
              src="./media/alan.jpg"
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

export default AboutPage;
