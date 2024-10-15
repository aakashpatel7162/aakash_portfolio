import React, { useRef, useState } from "react";
import "./home.style.css";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import Contact from "../conmponent/Contact";
import Aboutus from "../conmponent/Aboutus";
import Experience from "../conmponent/Experience";
export default function Diagnosis() {
  const [thisExpertRole,setThisExpertRole]=useState(1)

  
  
  return (
    <>
      <Header thisExpertRole={thisExpertRole} />
      <Sidebar  thisExpert={setThisExpertRole}/>
      <Aboutus/>
      <Contact/>

      <Experience/>
    </>
  );
}
