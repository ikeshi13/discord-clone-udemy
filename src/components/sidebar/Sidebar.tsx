import React from "react";
import "./Sidebar.scss";

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
        <div className="siebarTop">
          <h3>Discord</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
