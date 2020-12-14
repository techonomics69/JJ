import React from "react";

import "./PatientAppCard.css";

export default function PatientAppointmentCard(props) {
  return (
    <div>
      {props.isAccepted ? (
        <div className="card pac m-3">
          <img
            alt="patients avatar"
            aria-label="patients avatar"
            className="avatar pac-photo"
            src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1598868531/projects/AcsTeleMed/captain-sparklez.jpg"
          />

          <div className="ml-3 mr-5">
            <p className="h5 mb-1">Patients Name</p>
            <p className="grey">Patient@microsoft.com</p>
          </div>

          <div className="ml-1">
            <div style={{ display: "flex" }}>
              <img
                className="p-2"
                src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1599129888/projects/AcsTeleMed/location-icon.svg"
                alt="location-icon"
              />
              <p>Las Vegas</p>
            </div>
            <div style={{ display: "flex" }}>
              <img
                className="p-2"
                src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1599129886/projects/AcsTeleMed/calendar-icon.svg"
                alt="calendar-icon"
              />
              <p>30 mins remaining</p>
            </div>
          </div>

          <div className="center-col ml-5">
            <button className="app-tab-iconbtn1 center">
              <img
                src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1598947716/projects/AcsTeleMed/video-call-icon.svg"
                alt="video call button"
              />
            </button>
            <button className="app-tab-iconbtn3 center">
              <img
                src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1599129713/projects/AcsTeleMed/audio-call-icon.svg"
                alt="audio call button"
              />
            </button>
            <button className="app-tab-iconbtn2 center">
              <img
                src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1598947716/projects/AcsTeleMed/chat-icon.svg"
                alt="send message button"
              />
            </button>
            <button className="red-cancel-button">Cancel</button>
          </div>
        </div>
      ) : (
        <div className="card pac m-3">
          <img
            alt="patients avatar"
            aria-label="patients avatar"
            className="avatar pac-photo"
            src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1598868531/projects/AcsTeleMed/captain-sparklez.jpg"
          />

          <div className="ml-3 mr-5">
            <p className="h5 mb-1">Patients Name</p>
            <p className="grey">Patient@microsoft.com</p>
          </div>

          <div className="ml-1">
            <div style={{ display: "flex" }}>
              <img
                className="p-2"
                src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1599129888/projects/AcsTeleMed/location-icon.svg"
                alt="location-icon"
              />
              <p>Las Vegas</p>
            </div>
            <div style={{ display: "flex" }}>
              <img
                className="p-2"
                src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1599129886/projects/AcsTeleMed/calendar-icon.svg"
                alt="calendar-icon"
              />
              <p>30 mins remaining</p>
            </div>
          </div>

          <div className="center-col ml-5">
            <button className="accept-button">Accept</button>
            <button className="red-cancel-button">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
