import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/styles";
import colors from "../../constants/colors";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
  },
  appbar: {
    background: colors.white,
    orientation: 0,
  },
  iconbtn: {
    marginLeft: "auto",
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar color="white">
          <IconButton className={classes.iconbtn}>
            <AccountCircleIcon onClick={handleClick} />
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
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </AppBar>
    </div>
  );
};
export default Navbar;
