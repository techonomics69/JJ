import React, { useState } from "react";

import NavDrawer from "../Components/NavDrawer/NavDrawer";
import HomePage from "./Homepage/index";
import { NavItems } from "./data";

import "./Patient.css";

const profileData = {
  prefix: "Mr.",
  fname: "Walter",
  lname: "Robertson"
};

export default function PatientDashboard(props) {
  let [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <div className="root">
      <NavDrawer
        items={NavItems}
        selectedIndex={selectedIndex}
        onChanged={(index) => {
          console.log(`selected index is now ${index}`);
          setSelectedIndex(index);
        }}
      />
      <div className="content">{getSelectedView(selectedIndex)}</div>
    </div>
  );
}

function getSelectedView(index) {
  switch (index) {
    case 0:
      return (
        <HomePage
          prefix={profileData.prefix}
          fname={profileData.fname}
          lname={profileData.lname}
        />
      );
    default:
      return (
        <HomePage
          prefix={profileData.prefix}
          fname={profileData.fname}
          lname={profileData.lname}
        />
      );
  }
}
