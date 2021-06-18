import { AppBar, IconButton, Menu, Toolbar, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import "./Dashboard.css";
import React from "react";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="d-navbar">
      <div className="nav-appbar">
        <Toolbar>
          <IconButton className="icon-bar">
            <AccountCircle onClick={handleClick} />
          </IconButton>
        </Toolbar>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Setting</MenuItem>
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
