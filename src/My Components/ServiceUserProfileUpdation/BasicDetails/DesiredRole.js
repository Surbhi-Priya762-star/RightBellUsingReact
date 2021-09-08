import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircle from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CircularProgress from '@material-ui/core/CircularProgress';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import BackupIcon from '@material-ui/icons/Backup';
import DesiredRole from '../DesiredRole';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Box } from '@material-ui/core';
import SideBar from './sidebar';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: '150px',
    backgroundColor: '#231c2b',
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

export default function PermanentDrawerLeft() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            <div style={{ marginTop: '50px', padding: '30px', width: '100%' }}>
              <Box display="flex" flexDirection="row" p={1} m={1} >
                <Box p={1} >
                  <h1>Surbhi priya</h1>
                  <p><h4>#ID-123456789</h4>  </p>
                </Box>
                <Box p={1} >
                  <CircularProgress variant="determinate" value={75} />75%
                </Box>
              </Box>
              <span><AccountCircle /></span>




            </div>
          </Typography>
        </Toolbar>
      </AppBar>

      <SideBar />

      <main className={classes.content}>
        <div className={classes.toolbar} />

        <DesiredRole />
      </main>
    </div>
  );
}
