import React from "react";

export default function AppointmentsTable(props) {
  return (
    <div className="appointments-table card">
      <div className="app-tab-card-top">
        <div className="heading">
          <p className="p-1">Upcoming Appointments List</p>
        </div>
        <div className="link ml-auto text-center">View all Appointments</div>
      </div>
      <div className="app-tab-heading">
        <p className="weight-3 heading">Patient Name</p>
        <p className="weight-1 heading">Time</p>
        <p className="weight-1 heading">Date</p>
        <p className="weight-1 heading">Reason</p>
        <p className="weight-1 heading">Payment</p>
        <p className="weight-3 heading"></p>
      </div>
      <div className="app-tab-items horizontal-overflow">
        <AppointmentsTableItem
          name="Ganesh Tiwari"
          time="12:00pm"
          date="12 Sept."
          reason="General"
          payment="200"
        />
        <AppointmentsTableItem
          name="Ganesh Tiwari"
          time="12:00pm"
          date="12 Sept."
          reason="General"
          payment="200"
        />
        <AppointmentsTableItem
          name="Ganesh Tiwari"
          time="12:00pm"
          date="12 Sept."
          reason="General"
          payment="200"
        />
        <AppointmentsTableItem
          name="Ganesh Tiwari"
          time="12:00pm"
          date="12 Sept."
          reason="General"
          payment="200"
        />
      </div>
    </div>
  );
}

function AppointmentsTableItem(props) {
  return (
    <div className="app-tab-item">
      <div className="weight-3">
        <img
          src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1598868531/projects/AcsTeleMed/captain-sparklez.jpg"
          style={{
            height: "40px",
            borderRadius: "50%",
            margin: "4px"
          }}
          alt="avatar"
        />
        <p className="inline">{props.name}</p>
      </div>
      <p className="weight-1">{props.time}</p>
      <p className="weight-1">{props.date}</p>
      <p className="weight-1">{props.reason}</p>
      <p className="weight-1" style={{ color: "#2AC2D1" }}>
        $. {props.payment}
      </p>
      <div className="weight-3 app-tab-item-buttons">
        <button className="app-tab-iconbtn1 center">
          <img
            src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1598947716/projects/AcsTeleMed/video-call-icon.svg"
            alt="video call button"
          />
        </button>
        <button className="app-tab-iconbtn2 center">
          <img
            src="https://res.cloudinary.com/dtldj8hpa/image/upload/v1598947716/projects/AcsTeleMed/chat-icon.svg"
            alt="send message button"
          />
        </button>
        <button
          style={{
            border: "1px solid red",
            padding: "4px",
            color: "red",
            borderRadius: "4px"
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
