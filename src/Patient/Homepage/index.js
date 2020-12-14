import React from "react";

import ProfessionCards from "./Components/ProfessionCards";
import DoctorCard from "./Components/DoctorCard";

import { professionCardsData, doctorData } from "../data";

import "./HomePage.css";

export default function HomePage(props) {
  return (
    <div>
      <div className="body">
        <div className="background">
          <div className="topBackground">
            <div className="image">
              <div className="gradient"></div>
            </div>
          </div>

          <div className="foreground">
            <div className="topbar my-4 ml-3">
              <div className="searhbox">
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    width: "20em",
                    height: "2em",
                    fontSize: "18px",
                    border: "0px",
                    padding: "16px"
                  }}
                />
              </div>
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

            <div className="text-white ml-3 h2">
              Welcome {props.prefix} {props.lname}
            </div>

            <div className="text-white ml-3">
              You have 6hrs remaining for video chat.
            </div>
            <div style={{ width: "80%" }}>
              <p className="ml-3 mt-5 text-white h5">
                Doctors You have already visited
              </p>
            </div>

            <div className="profession-cards-div">
              {professionCardsData.map((item, index) => {
                return (
                  <ProfessionCards
                    key={index}
                    name={item.name}
                    count={item.count}
                    onClick={item.onClick}
                    imageUrl={item.imageUrl}
                  />
                );
              })}
            </div>
            <div className="doctor-cards-div">
              <h6 className="ml-3 mt-2 mb-3">
                Doctors You have already visited
              </h6>
              <div style={{ display: "inline-flex" }}>
                {doctorData.map((item, index) => {
                  return (
                    <DoctorCard
                      key={index}
                      name={item.name}
                      type={item.type}
                      imageURL={item.imageURL}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
