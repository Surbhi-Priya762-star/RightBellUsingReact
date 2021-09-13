import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import ServiceUser from "../SignUp/ServiceUser";
import ServiceProvider from "../SignUp/ServiceProvider";
import SpeakerGroupIcon from "@material-ui/icons/SpeakerGroup";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import "../SignUp/ServiceUser.css";

import { ToastContainer, toast } from "react-toastify";
import { login, resetPassToken, sendForgotPassEmail } from "../../api";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    alignItems: "center",
    margin: theme.spacing(8, 1),
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    height: "100%",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "50%",
    marginTop: "30px",
  },
}));

function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("friday-user-info"));
    if (userInfo !== null) {
      if (userInfo.role == "user") history.push(`/profile/${userInfo.id}`);
      else history.push(`/adminProfile/${userInfo.id}`);
    }
  }, []);

  const handleSubmit = async (e) => {
    // console.log(e);
    //check email
    if (email === null || email === "") {
      alert("Please Enter Email!");
      return;
    }

    if (pass === null || pass === "") {
      alert("Please Enter password!");
      return;
    }

    var request = {
      email: email,
      password: pass,
    };

    //call api
    const res = await login(request);
    if (res) {
      console.log(res);
      history.push(`/`);
    }
  };

  const ForgotPassword = async () => {
    //check email
    if (email === null || email === "") {
      alert("Please Enter Email!");
      return;
    }
    await sendForgotPassEmail(email);
  };

  return (
    <div>
      <Header />

      <Container className="Main-content">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                {/* <form className={classes.form} noValidate> */}
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="remember"
                        color="primary"
                        style={{ marginTop: "5px" }}
                      />
                    }
                    label="Remember me"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    // className={classes.submit}
                    onClick={handleSubmit}
                    style={{ alignItems: "center", justifySelf: "center" }}
                  >
                    Sign In
                  </Button>
                </Grid>

                <Grid container style={{ marginTop: "20px" }}>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "30px" }}>
                  <h5>or Login using:</h5>
                </Grid>
                <Grid item xs={12}>
                  <span
                    style={{
                      marginLeft: "10px",
                      color: "#4267B2",
                      fontSize: "45px",
                    }}
                  >
                    <FaFacebookSquare />
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      color: "#DB4437",
                      fontSize: "45px",
                    }}
                  >
                    {" "}
                    <FaGoogle />
                  </span>
                </Grid>

                {/* </form> */}
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img
                  className="img"
                  alt="complex"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                />
                <h4 className="welcome">WELCOME!</h4>

                <h5>
                  Not Registered with RightBell?Please Sign Up to experience our
                  Services
                </h5>

                <Link
                  href="/ServiceUser"
                  onClick={ServiceUser}
                  style={{ fontSize: "20px", fontWeight: "700" }}
                >
                  As a Service User <SupervisorAccountIcon />
                </Link>

                <Link
                  href="/ServiceProvider"
                  onClick={ServiceProvider}
                  style={{ fontSize: "20px", fontWeight: "700" }}
                >
                  As a Service Provider <SpeakerGroupIcon />
                </Link>

                <img
                  src={"/Images/logo.png"}
                  width="80"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Right Bell logo"
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Login;
