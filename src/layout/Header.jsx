import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MessageIcon from "@mui/icons-material/Message";
import PaymentIcon from "@mui/icons-material/Payment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import IMAGES from "../assets/images";
import data from "../constant/data";
export default function Header({ thisExpertRole }) {
  const icons = [
    <HomeIcon />,
    <PersonIcon />,
    <ScheduleIcon />,
    <MessageIcon />,
    <PaymentIcon />,
  ];

  const currentExpert = data.expertList[thisExpertRole];
  return (
    <div className="header_main">
      <img src={IMAGES.logo} alt="TestLogo" />
      <div className="header_center">
        {data.list.map((text, index) => (
          <div key={index} className="header">
            <div>{icons[index]}</div>
            <span>{data.list[index]}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
        <img src={IMAGES.jassika} alt="doctor" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{currentExpert.name}</span>
          <span>{currentExpert.role}</span>
        </div>
        <SettingsOutlinedIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
}
