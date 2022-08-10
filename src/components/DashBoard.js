import React from "react";
import OnlineCard from "./OnlineCard";
import VolumeCard from "./VolumeCard";
import SoundCard from "./SoundCard";
import PlayCard from "./PlayCard";
import Retro from "./Retro.jpg";

const DashBoard = () => {
  return (
    <React.Fragment>
      <div className="dashboardContainer">
        <div className="onlineCard">
          <OnlineCard />
        </div>

        <div className="volumeCard">
          <VolumeCard />
        </div>

        <div className="soundCard">
          <SoundCard />
        </div>
      </div>

      <div className="dashboardImage">
        <img src={Retro} alt="Retro Cassette" />
      </div>

      <div className="playCard">
        <PlayCard />
      </div>
    </React.Fragment>
  );
};

export default DashBoard;
