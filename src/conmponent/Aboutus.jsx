import React from "react";
import data from "../constant/data";
export default function Aboutus() {
  const { aboutUsPage } = data;
  return <div>{aboutUsPage.content}</div>;
}
