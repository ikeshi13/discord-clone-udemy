import React from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/**sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo192.png"></img>
        </div>
        <div className="serverIcon">
          <img src="./logo192.png"></img>
        </div>
      </div>
      {/**sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        {/** sidebarChannel */}
        <div className="sidebarChannels">
          <div className="sidebarChannelHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>テストチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
