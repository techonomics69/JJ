import React from "react";

export default function PendingTaskCard(props) {
  return (
    <div
      className="pending-card"
      style={{
        backgroundColor: props.bgColor,
        cursor: "pointer",
        borderColor: props.cardBorderColor
      }}
      onClick={
        props.onClick === undefined
          ? () => {
              console.log("undefined onClick");
            }
          : props.onClick
      }
    >
      <div
        className="count"
        style={{
          borderColor: props.circleBorder,
          backgroundColor: "white",
          color: props.circleTextColor
        }}
      >
        {props.count}
      </div>
      <div className="taskname">{props.taskName}</div>
    </div>
  );
}
