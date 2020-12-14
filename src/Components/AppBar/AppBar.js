import React, { useState } from "react";

import "./AppBar.css";

export default function AppBar(props) {
  return (
    <div className="topbar">
      <div className="image">
        <div className="gradient">
          <div className="topbar-content">
            <div className="topbar-left">
              <img
                src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1598941580/projects/AcsTeleMed/left-arrow.svg"
                alt="back button"
                className="icon"
              />
              <p className="h4">{props.title}</p>
            </div>

            <div className="topbar-right mr-3">
              <div
                className="notif-icon"
                style={{
                  marginLeft: "auto"
                }}
              >
                <img
                  alt="bell"
                  src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1598872430/projects/AcsTeleMed/Notification.png"
                />
              </div>
              <div className="profile-space">
                <p className="text-white mx-3">
                  {props.prefix} {props.fname} {props.lname}
                </p>
                <img
                  className="profile-avatar"
                  src="https://i.ytimg.com/vi/ConoDveVr7Q/hqdefault.jpg"
                  alt="profile avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
