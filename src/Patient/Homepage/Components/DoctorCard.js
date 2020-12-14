import React from "react";
import { Card, Row, Col, Container, CardImg } from "react-bootstrap";

const imageURL =
  "https://res.cloudinary.com/dtldj8hpa/image/upload/v1598868531/projects/AcsTeleMed/captain-sparklez.jpg";
const name = "Captain Sparklez";
const type = "Ballerina";

export default function DoctorCard(props) {
  return (
    <div className="Container">
      <img
        className="left-image"
        src={props.imageURL === undefined ? imageURL : props.imageURL}
        alt="DoctorsImage"
      />

      <div className="right">
        <h5 className="mt-4 mx-2">
          {props.name === undefined ? name : props.name}
        </h5>
        <p className="mt-2 mx-2">
          {props.type === undefined ? type : props.type}
        </p>
        <p
          className="ml-2 mt-4 link"
          style={{
            cursor: "pointer"
          }}
          onClick={
            props.onClick === undefined
              ? () => {
                  console.log("implement onclick on doctors card");
                }
              : props.onClick
          }
        >
          View Profile
        </p>
      </div>
    </div>
  );
}
