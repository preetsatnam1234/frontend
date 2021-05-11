import React from "react";
import "./Dashboard.css";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export const Dashboard = () => {
  return (
    <div className="d-area">
      <SideBar />
      <NavBar />
    </div>
  );
};
