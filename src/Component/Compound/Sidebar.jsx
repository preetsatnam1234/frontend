import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo from "../../assets/logo.png";
import { makeStyles } from "@material-ui/styles";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import CategoryIcon from "@material-ui/icons/Category";
import LayersIcon from "@material-ui/icons/Layers";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import colors from "../../assets/constants/colors";
let useStyles = makeStyles((theme) => ({
  box: {
    width: 15,
    display: "flex",
    justifyContent: "",
    flexDirection: "column",
    background: colors.black,
    color: colors.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "left",
    flexDirection: "column",
  },
  logo: {
    width: 60,
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 10,
  },
  color: {
    color: colors.white,
    fontSize: 12,
  },
  icon: {
    color: colors.white,
  },
}));
export const Sidebar = () => {
  let classes = useStyles();
  return (
    <AppBar className={classes.box}>
      <Box>
        <img src={logo} className={classes.logo} alt="logo" />
      </Box>
      <Toolbar className={classes.toolbar}>
        <IconButton>
          <HomeIcon className={classes.icon} />
          <Typography varient="h6" className={classes.color}>
            Home
          </Typography>
        </IconButton>
        <IconButton>
          <PeopleIcon className={classes.icon} />
          <Typography varient="h6" className={classes.color}>
            Users
          </Typography>
        </IconButton>
        <IconButton>
          <CategoryIcon className={classes.icon} />
          <Typography varient="h6" className={classes.color}>
            Category
          </Typography>
        </IconButton>
        <IconButton>
          <LayersIcon className={classes.icon} />
          <Typography varient="h6" className={classes.color}>
            Product
          </Typography>
        </IconButton>
        <IconButton>
          <AssessmentIcon className={classes.icon} />
          <Typography varient="h6" className={classes.color}>
            Transaction
          </Typography>
        </IconButton>
        <IconButton>
          <ReceiptIcon className={classes.icon} />
          <Typography varient="h6" className={classes.color}>
            Receipt
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
