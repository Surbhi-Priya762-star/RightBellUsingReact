import React, { useState } from 'react';
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
import Box from '@material-ui/core/Box';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import BackupIcon from '@material-ui/icons/Backup';
import { CircularProgress } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import './MenuBar.css'
import mainLogo from '../../../assest/logo.png';
import { generateResume } from '../../../api';



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

export default function SideBar({ changeSlide }) {
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('friday-user-info')));


    return (

        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"

        >

            <div style={{ marginTop: '0', paddingRight: '20px', backgroundColor: '#231c2b' }} />
            <img
                src={"/Images/logo.png"}
                width="250"
                height="150"
                style={{ paddingBottom: '0px' }}
                alt="Right Bell logo"
            />
            <Divider />



            <List>
                <Button onClick={() => changeSlide("/BasicDetails")} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>BasicDetails <ExitToAppIcon /></h5> </Button>
            </List>
            <Divider />


            <List>
                <Button onClick={() => changeSlide("/BasicDetails")} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>Dashboard <DashboardIcon /></h5>

                </Button>
            </List>

            <Divider />

            <List>
                <Button onClick={() => changeSlide("/Education")} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>Education<MenuBookIcon /></h5> </Button>
            </List>

            <Divider />

            <List>
                <Button onClick={() => changeSlide('/Employment')} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>Employment
                        <span style={{ margin: 'auto' }}><WorkIcon /></span></h5> </Button>
            </List>

            <Divider />

            <List>
                <Button onClick={() => changeSlide('/KeySkills')} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>KeySkills<VpnKeyIcon /></h5> </Button>
            </List>

            <Divider />

            <List>
                <Button onClick={() => changeSlide('/Project')} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>Project<FileCopyIcon /></h5> </Button>
            </List>

            <Divider />

            <List>
                <Button onClick={() => changeSlide('/Accomplishment')} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>Accomplishment<CardGiftcardIcon /></h5> </Button>
            </List>

            <Divider />

            <List>
                <Button onClick={() => changeSlide('/DesiredRole')} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>DesiredRole<WorkOutlineIcon /></h5> </Button>
            </List>
            <Divider />

            <List>
                <Button onClick={() => changeSlide('/Assessment')} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>Assessment<BackupIcon /></h5> </Button>
            </List>
            <Divider />

            <List>
                <Button onClick={() => generateResume(userInfo.id, userInfo)} style={{ width: '200px', marginLeft: '10px' }}
                >
                    <h5>Generate CV</h5> </Button>
            </List>

            <Divider />












        </Drawer>


    );
}
