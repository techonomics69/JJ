import React, { useState } from "react";

import CSSModules from "react-css-modules";
import styles from "./Tabs.module.css";

function Tabs(props) {
  var [selectedIndex, setSelectedIndex] = useState({
    index: 0
  });

  return (
    <div styleName="tab_bar">
      {tabItems.map((value, index) => {
        return index === selectedIndex ? (
          <div
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
            styleName="tab_item selected csr_pointer"
          >
            {value.title}
          </div>
        ) : (
          <div
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
            styleName="tab_item csr_pointer"
          >
            {value.title}
          </div>
        );
      })}
    </div>
  );
}

var tabItems = [
  {
    title: "All Appointments"
  },
  {
    title: "Upcoming Appointments"
  },
  {
    title: "Appointment Requests"
  },
  {
    title: "Followup Appointments"
  }
];

export default CSSModules(Tabs, styles, { allowMultiple: true });
