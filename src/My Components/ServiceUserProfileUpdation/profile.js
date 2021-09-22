import React, { useState, useEffect } from "react";
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
import CircularProgress from "@material-ui/core/CircularProgress";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import BackupIcon from "@material-ui/icons/Backup";
import { Box } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Assessment from "./Assessment";
import SideBar from "../ServiceUserProfileUpdation/BasicDetails/sidebar";
import Basic from "./Basic";
import Education from "./Education";
import Employment from "./Employment";
import Project from "./Project";
import Accomplishment from "./Accomplishment";
import DesiredRole from "./DesiredRole";
import KeySkills from "./KeySkills";
import { logoutAPI } from '../../api';
import { NavDropdown } from 'react-bootstrap';
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

export default function Profile() {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user-info"))
  );

  const [normalised, setNormalised] = useState(0);

  useEffect(() => {
    calculateFunction();
  }, []);

  const classes = useStyles();

  const [side, setSide] = useState("/BasicDetails");

  const changeSlide = (val) => {
    console.log(val);

    setSide(val);
  };

  const calculateFunction = () => {
    var score = 0;
    console.log(userInfo);
    if (userInfo.education.length > 0) {
      console.log(1);
      score += 1;
    }
    if (userInfo.work.length > 0) {
      console.log(2);

      score += 1;
    }
    if (userInfo.project.length > 0) {
      console.log(3);

      score += 1;
    }
    if (userInfo.accomplishment.length > 0) {
      console.log(4);

      score += 1;
    }
    if (userInfo.desiredRole.length > 0) {
      console.log(5);

      score += 1;
    }
    if (userInfo.assessment.length > 0) {
      score += 1;
    }
    var n = (score - 0) / (6 - 0);
    console.log(n * 100);
    setNormalised(n * 100);
  };
  const genratePage = (val) => {
    switch (val) {
      case "/BasicDetails":
        return <Basic userInfo={userInfo} />;
      case "/Education":
        return <Education userInfo={userInfo} />;
      case "/Employment":
        return <Employment userInfo={userInfo} />;
      case "/KeySkills":
        return <KeySkills userInfo={userInfo} />;
      case "/Project":
        return <Project userInfo={userInfo} />;
      case "/Accomplishment":
        return <Accomplishment userInfo={userInfo} />;
      case "/DesiredRole":
        return <DesiredRole userInfo={userInfo} />;
      case "/Assessment":
        return <Assessment userInfo={userInfo} />;
      case "/CV":
        return <div></div>;

      default:
        return <div></div>;
    }
  };

  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            <div style={{ marginTop: "50px", padding: "30px", width: "100%" }}>
              <Box display="flex" flexDirection="row" p={1} m={1}>
                <Box p={1}>
                  <h1>{userInfo.name}</h1>
                  <p>
                    <h4>#{userInfo._displayId}</h4>{" "}
                  </p>
                </Box>
                <Box  p={1}>
                  <CircularProgress
                    style={{ color: normalised >= 90 ? "green" : "white" }}
                    size={60}
                    variant="determinate"
                    value={normalised}
                  />
                  {normalised.toFixed(2)}%
                </Box>
                <div style={{  width: '60vw', height: '100px', justifyContent: 'flex-end', display: 'flex', alignItems: 'center' }}>
                  <div onClick={() => {

                  }}>
                    <AccountCircle />
                  </div>
                  <NavDropdown title={userInfo.name} id="collasible-nav-dropdown" style={{ marginRight: '20px' }}>

                    <LinkContainer to={userInfo.role == 'user' ? `/profile/${userInfo.id}` : `/adminProfile/${userInfo.id}`}>
                      <NavDropdown.Item>My Account </NavDropdown.Item>
                    </LinkContainer>
                    {/* <LinkContainer to="/" onClick={logoutAPI}> */}
                    <NavDropdown.Item onClick={logoutAPI}>Logout</NavDropdown.Item>
                    {/* </LinkContainer> */}
                  </NavDropdown>
                </div>
              </Box>
            </div>
            
          </Typography>
        </Toolbar>
      </AppBar>

      <SideBar changeSlide={changeSlide} />

      <main className={classes.content}>
        <div className={classes.toolbar} />

        {genratePage(side)}
      </main>
    </div>
  );
}
