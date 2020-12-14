import React, { useState } from "react";

import "./NavDrawer.css";

const contoso_logo =
  "https://res.cloudinary.com/dtldj8hpa/image/upload/v1598636037/projects/AcsTeleMed/contoso_med.png";

const navigation_url =
  "https://raw.githubusercontent.com/microsoft/fluentui-system-icons/master/assets/Navigation/SVG/ic_fluent_navigation_24_regular.svg";

export default function NavDrawer(props) {
  const NavItems = props.items;
  const [selectedIndex, setSelectedIndex] = useState(props.selectedIndex);

  return (
    <div className="drawer">
      <div className="header">
        <img
          src={navigation_url}
          alt="nav-icon"
          className="nav-icon top-icon"
        />

        <img className="logo-drawer" src={contoso_logo} alt="company name" />
      </div>

      <div className="list-actions">
        {NavItems.map((item, index) => {
          return (
            <NavItemsComponent
              key={index}
              index={index}
              isSelected={index === selectedIndex}
              title={item.title}
              itemLogo={item.url}
              onClick={(index) => {
                props.onChanged(index);
                setSelectedIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function NavItemsComponent(props) {
  return props.isSelected ? (
    <div
      className="nav-items selected"
      onClick={
        props.next
          ? props.next
          : () => {
              props.onClick(props.index);
            }
      }
    >
      <img src={props.itemLogo} alt="nav-icon" className="nav-icon" />

      <p className="nav-items-title">{props.title}</p>
    </div>
  ) : (
    <div
      className="nav-items"
      onClick={
        props.next
          ? props.next
          : () => {
              props.onClick(props.index);
            }
      }
    >
      <img src={props.itemLogo} alt="nav-icon" className="nav-icon" />

      <p className="nav-items-title">{props.title}</p>
    </div>
  );
}
