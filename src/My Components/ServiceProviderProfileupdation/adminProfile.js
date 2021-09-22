import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import AdminSideBar from './adminSidebar';
import Assessment from './AssessmentServiceProvider';
import Postjob from './Postjob';
import Basic from './BasicServiceProvider';


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

export default function AdminProfile() {
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('user-info')));

    const [normalised, setNormalised] = useState(0);

    useEffect(() => {

        calculateFunction();


    }, [])



    const [side, setSide] = useState('/BasicDetails');

    const changeSlide = (val) => {
        console.log(val);

        setSide(val);
    }


    const calculateFunction = () => {
        var score = 0;
        console.log(userInfo);
        if (userInfo.companyInfo && userInfo.companyInfo.length > 0) {
            console.log(1);
            score += 1;
        } if (userInfo.company && userInfo.company.length > 0) {
            console.log(2);

            score += 1;
        }
        if (userInfo.postJob && userInfo.postJob.length > 0) {
            console.log(2);

            score += 1;
        }
        var n = (score - 0) / (3 - 0);
        console.log(n * 100);
        setNormalised(n * 100);

    }
    const genratePage = (val) => {
        switch (val) {
            case '/BasicDetails':

                return <Basic />;
            case '/Assessment':

                return <Assessment />;
            case '/PostJob':

                return <Postjob />;


            default:
                return <div></div>;

        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        <div style={{ marginTop: '50px', padding: '30px', width: '100%' }}>
                            <Box display="flex" flexDirection="row" p={1} m={1} >
                                <Box p={1} >
                                    <h1>{userInfo.name}</h1>
                                    <p><h4>#{userInfo._displayId}</h4>  </p>
                                </Box>
                                <Box p={1} >
                                    <CircularProgress style={{ color: normalised >= 90 ? 'green' : 'white' }} size={60} variant="determinate" value={normalised} />{normalised.toFixed(2)}%
                                </Box>
                            </Box>
                            <span><AccountCircle /></span>



                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>

            <AdminSideBar changeSlide={changeSlide} />
            <main className={classes.content}>
                <div className={classes.toolbar} />

                {genratePage(side)}
            </main>
        </div>
    );
}
