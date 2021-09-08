import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


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

export default function AdminSideBar({ changeSlide }) {
    const classes = useStyles();


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
            <LinkContainer to="/">
                <img
                    src={"/Images/logo.png"}
                    width="250"
                    height="150"
                    style={{ paddingBottom: '40px' }}
                    alt="Right Bell logo"
                />
            </LinkContainer>
            <Divider />


            <List>
                <Button onClick={() => changeSlide('/BasicDetails')} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>BasicDetails <ExitToAppIcon /></h5> </Button>
            </List>
            <Divider />
            <List>
                <Button onClick={() => changeSlide('/Assessment')} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>Dashboard <DashboardIcon /></h5>

                </Button>
            </List>
            <Divider />
            <List>
                <Button onClick={() => changeSlide('/Assessment')} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>Assessment<MenuBookIcon /></h5> </Button>
            </List>
            <Divider />
            <List>
                <Button onClick={() => changeSlide('/PostJob')} style={{ width: '200px', marginLeft: '10px' }}
                    variant="outline-dark">
                    <h5>Post a Job here
                        <span style={{ margin: 'auto' }}><WorkIcon /></span></h5> </Button>
            </List>
            <Divider />

            <Divider />


        </Drawer>

    );
}
