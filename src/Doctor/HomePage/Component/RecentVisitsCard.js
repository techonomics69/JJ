import React from "react";

export default function RecentVisitsCard(props) {
  return (
    <div className="card fill">
      <p className="h5 m-3">Recent Visits</p>

      <div className="recent-visit-items horizontal-overflow">
        <RecentVisitItem
          imageUrl="https://res.cloudinary.com/dtldj8hpa/image/upload/v1598868531/projects/AcsTeleMed/captain-sparklez.jpg"
          name="Captain Sparklez"
          date="28th August 2018"
        />
      </div>
    </div>
  );
}

function RecentVisitItem(props) {
  return (
    <div className="recent-visit-item center">
      <img
        src={props.imageUrl}
        className="small avatar"
        alt="notif-type avatar"
      />
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          fontSize: "12px"
        }}
      >
        <p className="bold">{props.name}</p>
        {props.date} <br />
      </div>
    </div>
  );
}
