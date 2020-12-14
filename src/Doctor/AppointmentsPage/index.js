import React from "react";

import PatientAppointmentCard from "./Components/PatientAppCard";

import AppBar from "../../Components/AppBar/AppBar";
import Tabs from "../../Components/Tabs/Tabs";
import "./AppointmentsPage.css";

export default function AppointmentsPage(props) {
  return (
    <div className="appointments-page">
      <AppBar
        title="My Appointments"
        prefix={props.prefix}
        fname={props.fname}
        lname={props.lname}
      />

      <Tabs />
      <div>
        <PatientAppointmentCard isAccepted={true} />
        <PatientAppointmentCard isAccepted={false} />
        <PatientAppointmentCard isAccepted={false} />
      </div>
    </div>
  );
}
