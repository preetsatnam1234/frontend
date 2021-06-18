import React from "react";
import "./Dashboard.css";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import CategoryIcon from "@material-ui/icons/Category";
import LayersIcon from "@material-ui/icons/Layers";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";
import logo from "../../assets/logo.png";
let SideBar = () => {
  let current = useLocation().pathname;
  console.log(current);
  let sidebarLinks = [
    { path: "/", icon: <HomeIcon />, label: "Dashboard" },
    { path: "/user", icon: <PeopleIcon />, label: "User" },
    { path: "/category", icon: <CategoryIcon />, label: "category" },
    { path: "/product", icon: <LayersIcon />, label: "Product" },
    { path: "/transaction", icon: <AssessmentIcon />, label: "Transaction" },
    { path: "/receipt", icon: <ReceiptIcon />, label: "Receipt" },
  ];
  return (
    <div className="d-sidebar">
      <Box>
        <img src={logo} className="logo-img" alt="logo" />
      </Box>
      {sidebarLinks.map((link) => (
        <Link to={link.path}>
          <div
            className={`side-item  ${current === link.path ? "active" : ""}`}
          >
            {link.icon}
            <p className="links-label">{link.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default SideBar;
