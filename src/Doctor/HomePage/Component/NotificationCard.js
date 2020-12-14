import React from "react";

export default function NotificationCard(props) {
  return (
    <div className="card fill">
      <p className="h5 m-3">Notifications</p>

      <div className="notif-items horizontal-overflow">
        <NotifItems
          imageUrl="https://res.cloudinary.com/dtldj8hpa/image/upload/v1598947717/projects/AcsTeleMed/alert-icon.svg"
          type="Reminder"
          message="Meet Alex"
          remainingTime="3 minutes"
        />
        <NotifItems
          imageUrl="https://res.cloudinary.com/dtldj8hpa/image/upload/v1598947717/projects/AcsTeleMed/alert-icon.svg"
          type="Message"
          message="Image Recieved"
          remainingTime="12 hrs. ago"
        />
      </div>
    </div>
  );
}

function NotifItems(props) {
  return (
    <div className="notif-item">
      <img src={props.imageUrl} className="avatar" alt="notif-type avatar" />
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          fontSize: "12px"
        }}
      >
        <p className="bold">{props.type}</p>
        {props.message} <br />
        <p className="grey">{props.remainingTime}</p>
      </div>
    </div>
  );
}
