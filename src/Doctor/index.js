import React, { useState } from "react";

import NavDrawer from "../Components/NavDrawer/NavDrawer";
import { NavItems } from "./data.js";

import HomePage from "./HomePage/index";
import AppointmentsPage from "./AppointmentsPage/index";

export default function DoctorsDashboard() {
  const [selectedIndex, setSelectedIndex] = useState(1);

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

const profileData = {
  prefix: "Dr.",
  fname: "John",
  lname: "Shaw"
};

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
    case 1:
      return (
        <AppointmentsPage
          prefix={profileData.prefix}
          fname={profileData.fname}
          lname={profileData.lname}
        />
      );
    default:
      return <HomePage />;
  }
}
