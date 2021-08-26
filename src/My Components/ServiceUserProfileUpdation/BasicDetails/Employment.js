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

import { Button } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import Employment from '../Employment';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height:'150px',
    backgroundColor:'#231c2b',
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
            <div style={{marginTop:'40px'}}>
           <h1>Surbhi priya</h1>  
            <p><h4>#ID-123456789</h4>   <CircularProgress variant="determinate" value={75} />75%</p>
            <span><AccountCircle/></span>
          
           
     
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
     
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        
      >
        
        <div style={{marginTop:'0', paddingRight:'20px', backgroundColor:'#231c2b'}} />
        <LinkContainer to="/">
        <img
        src={"/Images/logo.png"}
        width="250"
        height="190"
        style={{paddingBottom:'40px'}}
        alt="Right Bell logo"
        />
        </LinkContainer>
        <Divider />
       
      
        <LinkContainer to="/Basic">
        <List>
        <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h5>BasicDetails <ExitToAppIcon/></h5> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Dashboard">
        <List>
        <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h5>Dashboard <DashboardIcon/></h5>
           
            </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Education">
        <List>
       <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h5>Education<MenuBookIcon/></h5> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Employment">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h5>Employment
             <span style={{margin:'auto'}}><WorkIcon/></span></h5> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/KeySkills">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h5>KeySkills<VpnKeyIcon/></h5> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Project">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h5>Project<FileCopyIcon/></h5> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Accomplishment">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h5>Accomplishment<CardGiftcardIcon/></h5> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/DesiredRole">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h5>DesiredRole<WorkOutlineIcon/></h5> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Assessment">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h5>Assessment<BackupIcon/></h5> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/CV">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        >
           <h5>Generate CV</h5> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               

               

       
     
     
     
     
     
     
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      
      <Employment/>
      </main>
    </div>
  );
}
