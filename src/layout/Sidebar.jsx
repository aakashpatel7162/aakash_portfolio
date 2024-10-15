import React from "react";
import data from "../constant/data";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Sidebar({ thisExpert }) {
  const handleExpertRole = (i) => {
    thisExpert(i);
  };
  
  return (
    <div>
      <div className="left_bar">
        {data.expertList.map((item, i) => (
          <div
            key={i}
            className="patient"
            onClick={() => handleExpertRole(i)}
          >
            <img src={item.img} alt="" className="img" />
            <div>
              <div>{item.role}</div>
              <div>
                <span>{item.gender}</span>
                <span>{item.age}</span>
              </div>
            </div>
            <MoreHorizIcon />
          </div>
        ))}
      </div>
    </div>
  );
}
