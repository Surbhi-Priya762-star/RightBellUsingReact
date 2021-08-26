import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


import Education from '../Education';
import { Button } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import DashboardIcon from '@material-ui/icons/Dashboard';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height:'100px',
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
    padding: theme.spacing(2),
    marginTop:'10px',
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
            Permanent drawer
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
       <div style={{marginTop:'10px', paddingRight:'20px'}} />
        <img
        src={"/Images/logo.png"}
        width="210"
        height="180"
        style={{paddingBottom:'40px'}}
        alt="Right Bell logo"
        />
        <Divider />
       
        <Divider />
        <LinkContainer to="/Employment">
        <List>
        <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h4>BasicDetails</h4> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Employment">
        <List>
        <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h4><DashboardIcon/> Dashboard </h4>
           
            </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Education">
        <List>
       <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h4>Education</h4> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Employment">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h4>Employment</h4> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Employment">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h4>KeySkills</h4> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Employment">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h4>Project</h4> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Employment">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h4>Accomplishment</h4> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Employment">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h4>DesiredRole</h4> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Employment">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h4>Assessment</h4> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               <LinkContainer to="/Employment">
        <List>
           <Button style={{width:'200px', marginLeft:'10px'}}
        variant="outline-dark">
           <h4>Generate CV</h4> </Button>
       </List>
           </LinkContainer>
               <Divider/>
               

               

       
     
     
     
     
     
     
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      
      <Education/>
      </main>
    </div>
  );
}
