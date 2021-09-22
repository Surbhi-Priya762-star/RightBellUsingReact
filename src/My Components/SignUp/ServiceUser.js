import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RrightBellModal from "../MainBodyContent/model";
import "./ServiceUser.css";
import { ToastContainer, toast } from "react-toastify";
import { registerUser } from "../../api";


export default (props) => {
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
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
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
    <div>
      <Row className="mb-5">
        <Header />
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col className="mb-5" xs={3}>
          <Row style={{ textAlign: "center" }}>
            <h2>Sign Up As Service User</h2>
            <h5 style={{ color: "#aaa9a9" }}>Sign up as a service user with rightbell to get the services</h5>
          </Row>
        </Col>
        <Col xs={12} />
        <Col xs={3}>
          <Row>
            <InputGroup className="mb-3">
              <Row>
                <Col>
                  <FormControl
                    placeholder="First name"
                    aria-label="email"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Col>
                <Col>
                  <FormControl
                    placeholder="Last name"
                    aria-label="email"
                   onChange={e => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Email"
                aria-label="email"
                onChange={e => setEmail(e.target.value)}
                aria-label="password"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Phone number"
                aria-label="phone_number"
                type="number"
                onChange={e => setPhone(e.target.value)}
                aria-label="password"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Password"
                aria-label="password"
                type="password"
                onChange={e => setPass(e.target.value)}
                aria-label="password"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Confirm password"
                aria-label="phone_number"
                type="password"
                onChange={e => setPass2(e.target.value)}
                aria-label="password"
              />
            </InputGroup>
          </Row>
        </Col>
        <Col xs={12} />
        <Col xs={3}>
          <Row>
            <Col>
              <p onClick={() => props.history.push('/Login')} style={{ color: '#0B5ED7', cursor: "pointer" }}>Already have an account ? Login</p>
            </Col>
            <Col>
              <Button onClick={handleSubmit} style={{ width: '100%' }} variant="primary">Sign Up</Button>
            </Col>

          </Row>
        </Col>
        <Col xs={12} />
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  )
}
