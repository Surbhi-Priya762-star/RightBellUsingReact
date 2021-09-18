/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import WorkIcon from "@material-ui/icons/Work";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import Box from "@material-ui/core/Box";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import BackupIcon from "@material-ui/icons/Backup";
import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { LinkContainer } from "react-router-bootstrap";
import "./MenuBar.css";
import mainLogo from "../../../assest/logo.png";
import { generateResume } from "../../../api";
import { logoutAPI } from "../../../api";
import { useHistory } from "react-router-dom";
import { sidebarStyle } from "../../../styles/sidebar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: "150px",
    backgroundColor: "#231c2b",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function SideBar({ changeSlide }) {
  const history = useHistory();
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("friday-user-info"))
  );

  return (
    <div>
      <div
        style={{
          marginTop: "0",
          paddingRight: "20px",
          // backgroundColor: "#231c2b",
          backgroundColor: "pink",
        }}
      />
      <img
        src={"/Images/logo.png"}
        width="250"
        height="150"
        style={{ paddingBottom: "0px", position: 'fixed' ,top: 0, zIndex: 100, }}
        alt="Right Bell logo"
      />
      <Divider />

      <div
        style={{
          borderRight: "1px solid #f1f2f6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          paddingTop: "150px",
          paddingBottom: "15px",
          paddingLeft: "15px",
          paddingRight: "15px",
          height: "800px",
        }}
      >
        <List>
          <Button
            onClick={() => changeSlide("/BasicDetails")}
            style={sidebarStyle.btnStyle}
            variant="outline-dark"
          >
            <h5 style={sidebarStyle.btnH5}>BasicDetails</h5> <ExitToAppIcon />
          </Button>
        </List>
        <Divider />

        <List>
          <Button
            onClick={() => changeSlide("/BasicDetails")}
            style={sidebarStyle.btnStyle}
            variant="outline-dark"
          >
            <h5 style={sidebarStyle.btnH5}>Dashboard</h5> <DashboardIcon />
          </Button>
        </List>

        <Divider />

        <List>
          <Button
            onClick={() => changeSlide("/Education")}
            style={sidebarStyle.btnStyle}
            variant="outline-dark"
          >
            <h5 style={sidebarStyle.btnH5}>Education</h5> <MenuBookIcon />
          </Button>
        </List>

        <Divider />

        <List>
          <Button
            onClick={() => changeSlide("/Employment")}
            style={sidebarStyle.btnStyle}
            variant="outline-dark"
          >
            <h5 style={sidebarStyle.btnH5}>
              Employment
              <span style={{ margin: "auto" }}>
                <WorkIcon />
              </span>
            </h5>{" "}
          </Button>
        </List>

        <Divider />

        <List>
          <Button
            onClick={() => changeSlide("/KeySkills")}
            style={sidebarStyle.btnStyle}
            variant="outline-dark"
          >
            <h5 style={sidebarStyle.btnH5}>
              KeySkills
              <VpnKeyIcon />
            </h5>{" "}
          </Button>
        </List>

        <Divider />

        <List>
          <Button
            onClick={() => changeSlide("/Project")}
            style={sidebarStyle.btnStyle}
            variant="outline-dark"
          >
            <h5 style={sidebarStyle.btnH5}>Project</h5> <FileCopyIcon />
          </Button>
        </List>

        <Divider />

        <List>
          <Button
            onClick={() => changeSlide("/Accomplishment")}
            style={sidebarStyle.btnStyle}
            variant="outline-dark"
          >
            <h5 style={sidebarStyle.btnH5}>Accomplishment</h5>{" "}
            <CardGiftcardIcon />
          </Button>
        </List>

        <Divider />

        <List>
          <Button
            onClick={() => changeSlide("/DesiredRole")}
            style={sidebarStyle.btnStyle}
            variant="outline-dark"
          >
            <h5 style={sidebarStyle.btnH5}>DesiredRole</h5> <WorkOutlineIcon />
          </Button>
        </List>
        <Divider />

        <List>
          <Button
            onClick={() => changeSlide("/Assessment")}
            style={sidebarStyle.btnStyle}
            variant="outline-dark"
          >
            <h5 style={sidebarStyle.btnH5}>
              Assessment
              <BackupIcon />
            </h5>{" "}
          </Button>
        </List>
        <Divider />

        <List>
          <Button
            onClick={() => generateResume(userInfo.id, userInfo)}
            style={{...sidebarStyle.btnStyle, background: "#576574"}}
            variant="contained"
            color="primary"
          >
            <h5 style={sidebarStyle.btnH5}>Generate CV</h5>{" "}
          </Button>
        </List>

        <List>
          <Button
            onClick={() => {
              logoutAPI().then(() => {
                history.push("/Login");
              });
            }}
            style={{...sidebarStyle.btnStyle, background: "#576574"}}
            variant="contained"
            color="primary"
          >
            <h5 style={sidebarStyle.btnH5}>Log Out</h5>{" "}
          </Button>
        </List>
      </div>
      <Divider />
    </div>
  );
}
