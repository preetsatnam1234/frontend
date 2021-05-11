import React from "react";
import "./Dashboard.css";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import CategoryIcon from "@material-ui/icons/Category";
import LayersIcon from "@material-ui/icons/Layers";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { Link, useLocation } from "react-router-dom";
let SideBar = () => {
  let current = useLocation().pathname;
  console.log(current);
  let sidebarLinks = [
    { path: "./dashboard", icon: <HomeIcon />, label: "Dashboard" },
    { path: "./user", icon: <PeopleIcon />, label: "User" },
    { path: "./category", icon: <CategoryIcon />, label: "category" },
    { path: "./product", icon: <LayersIcon />, label: "Product" },
    { path: "./transaction", icon: <AssessmentIcon />, label: "Transaction" },
    { path: "./receipt", icon: <ReceiptIcon />, label: "Receipt" },
  ];
  return (
    <div className="d-sidebar">
      {sidebarLinks.map((link) => (
        <Link to={link.path}>
          <div className={`side-item ${current === link.path ? "active" : ""}`}>
            {link.icon}
            <h6 class="links-label">{link.label}</h6>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default SideBar;
