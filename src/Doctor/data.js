var onClick = () => {
  console.log("default onclick handler");
};

export const NavItems = [
  {
    url:
      "https://raw.githubusercontent.com/microsoft/fluentui-system-icons/master/assets/Home/SVG/ic_fluent_home_20_regular.svg",
    title: "Home",
    onClick: onClick
  },
  {
    url:
      "https://raw.githubusercontent.com/microsoft/fluentui-system-icons/master/assets/Checkbox%20Checked/SVG/ic_fluent_checkbox_checked_20_regular.svg",
    title: "Appointments",
    onClick: onClick
  },
  {
    url:
      "https://raw.githubusercontent.com/microsoft/fluentui-system-icons/master/assets/Heart/SVG/ic_fluent_heart_16_regular.svg",
    title: "My Patients",
    onClick: onClick
  },
  {
    url:
      "https://raw.githubusercontent.com/microsoft/fluentui-system-icons/master/assets/Settings/SVG/ic_fluent_settings_20_regular.svg",
    title: "Settings",
    onClick: onClick
  },
  {
    url:
      "https://raw.githubusercontent.com/microsoft/fluentui-system-icons/master/assets/Sign%20Out/SVG/ic_fluent_sign_out_24_regular.svg",
    title: "Log Out",
    onClick: onClick
  }
];
