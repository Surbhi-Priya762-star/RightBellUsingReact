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
import RrightBellModal from "../MainBodyContent/model";
import "./ServiceUser.css";
import { ToastContainer, toast } from "react-toastify";
import { registerUser } from "../../api";


export default (props)  => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      width: "50%",
    },
  }));  
  const classes = useStyles();

  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("friday-user-info"));
    if (userInfo !== null) {
      if (userInfo.role === "user") props.history.push(`/profile/${userInfo.id}`);
      else props.history.push(`/adminProfile/${userInfo.id}`);
    }
  }, []);

  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState(null);
  const [lastname, setLastName] = useState(null);

  const [email, setEmail] = useState(null);

  const [pass, setPass] = useState(null);
  const [pass2, setPass2] = useState(null);

  const [phone, setPhone] = useState(null);

  const handleSubmit = async (e) => {
    console.log(e);

    // check names
    if (name == null || name == "") {
      console.log("i am here");
      alert("Name cannot be empty");
      return;
    }
    if (lastname == null || lastname == "") {
      alert("LastName cannot be empty");
      return;
    }

    //check email
    if (email == null || email == "") {
      alert("Email cannot be empty");
      return;
    }

    //check phone
    if (phone == null || phone == "") {
      alert("Phone cannot be empty");
      return;
    }

    //check password
    if ((pass == null || pass === "") && pass === pass2) {
      alert("Password cannot be empty or diffrent");
      return;
    }

    var response = {};

    response = {
      name: name + " " + lastname,
      email: email,
      password: pass,
      phone: phone,
      role: "user",
      // education: [],
      // work: [],
      // company: [],
    };
    console.log(response);

    // call the API
    if (
      response && // 👈 null and undefined check
      Object.keys(response).length !== 0
    ) {
    // call the api

    

    const res = await registerUser(response);
      setshowModal(true);
    console.log(res);
    }
  };

  return (
    <>
      <Header />
      <h1 className="heading">Sign Up as a Service User</h1>
      <Container className="Main-content">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <img
                  className="img"
                  alt="complex"
                  src="https://images.unsplash.com/photo-1536158614364-49b81421db1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                />
                <h4 className="welcome">WELCOME!</h4>
                <p className="text"> Create an Account </p>
                <h5 className="welcome">
                  RIGHTBELL
                  <span className="text">(Every Bells Matter to Us) </span>
                </h5>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                {/* <form className={classes.form} noValidate> */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      className="Text-field"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        setName(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        setLastName(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        setEmail(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        setPass(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="Confirm password"
                      label="Confirm Password"
                      type="password"
                      id="Confirm password"
                      autoComplete="current-password"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        setPass2(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="Phone Number"
                      label="Phone Number"
                      type="Phone Number"
                      id="Phone Number"
                      autoComplete="current-Phone Number"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        setPhone(e.target.value);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive all updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ paddingTop: "10px", paddingBottom: "11px", fontSize: '1.1rem' }}
                  onClick={handleSubmit}

                  // className={classes.submit}
                >
                  SIGN UP
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/Login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
                {/* </form> */}
              </Paper>
            </Grid>
          </Grid>
          <RrightBellModal openModel={showModal} setOpenModel={setshowModal} />
        </div>
      </Container>
      <Footer />
    </>
  );
}
