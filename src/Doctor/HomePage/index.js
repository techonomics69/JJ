import React from "react";

import PendingTaskCard from "./Component/PendingTaskCard";
import AppointmentsTable from "./Component/AppointmentsTable";
import NotificationCard from "./Component/NotificationCard";
import RecentVisitsCard from "./Component/RecentVisitsCard";
import AppBar from "../../Components/AppBar/AppBar";

import "./HomePage.css";

export default function HomePage(props) {
  return (
    <div>
      <div className="background">
        <AppBar
          title="Dashboard"
          prefix={props.prefix}
          fname={props.fname}
          lname={props.lname}
        />

        <div className="taskcardlist">
          <PendingTaskCard
            bgColor="#EAF9FB"
            circleBorder="#2AC2D1"
            circleTextColor="#2AC2D1"
            cardBorderColor="rgba(42, 194, 209, 0.3)"
            taskName="Appointment Requests"
            count={23}
          />
          <PendingTaskCard
            bgColor="#EAFBF5"
            circleBorder="#2AD19F"
            circleTextColor="#2AD19F"
            cardBorderColor="rgba(42, 209, 159, 0.3)"
            count={3}
            taskName="Today's Appointments"
          />
          <PendingTaskCard
            bgColor="#EAF9FB"
            circleBorder="#2AC2D1"
            cardBorderColor="rgba(42, 194, 209, 0.3)"
            circleTextColor="#2AC2D1"
            taskName="Follow-up Appointments"
            count={6}
          />
        </div>

        <div className="bottom-right">
          <div className="left-panel">
            <AppointmentsTable />
          </div>
          <div className="right-panel">
            <div className="notification-card">
              <NotificationCard />
            </div>
            <div className="recentvisits-card">
              <RecentVisitsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
