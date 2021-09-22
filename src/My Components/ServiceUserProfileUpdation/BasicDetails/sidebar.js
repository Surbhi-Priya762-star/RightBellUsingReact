/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import DashboardIcon from "@material-ui/icons/Dashboard";
import WorkIcon from "@material-ui/icons/Work";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import BackupIcon from "@material-ui/icons/Backup";
import Button from "@material-ui/core/Button";
import "./MenuBar.css";
import { generateResume } from "../../../api";
import { logoutAPI } from "../../../api";
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

export default function SideBar(props) {
  const { changeSlide } = props;
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user-info"))
  );

  return (
    <div>
      <div
        style={{
          marginTop: "0",
          paddingLeft: "20px",
          paddingRight: "20px",
          backgroundColor: "pink",
        }}
      />
      <img
        src={"/Images/logo.png"}
        width="250"
        height="150"
        style={{ paddingBottom: "0px", position: "fixed", top: 0, zIndex: 100 }}
        alt="Right Bell logo"
      />
      <Divider />

      <div
        style={{
          ...sidebarStyle.semiRoot,
        }}
      >
        <List>
          <Button
            onClick={() => changeSlide("/BasicDetails")}
            style={{ ...sidebarStyle.btnStyle, paddingTop: "15px" }}
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
            style={{ ...sidebarStyle.btnStyle, width: "auto" }}
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
            style={{
              ...sidebarStyle.btnStyle,
              background: "#07222E",
              marginTop: "10px",
            }}
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
                props.history.push("/Login");
              });
            }}
            style={{
              ...sidebarStyle.btnStyle,
              background: "#07222E",
              width: "178px",
            }}
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
