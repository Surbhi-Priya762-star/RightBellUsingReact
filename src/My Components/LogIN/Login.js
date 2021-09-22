import React, { useState, useEffect } from "react";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../SignUp/ServiceUser.css";
import { login, resetPassToken, sendForgotPassEmail } from "../../api";

const Login = (props) => {
  console.log("PPP", props);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    if (userInfo !== null) {
      if (userInfo.role == "user")
        props.history.push(`/profile/${userInfo.id}`);
      else props.history.push(`/adminProfile/${userInfo.id}`);
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
    console.log("RES", res);
    if (res) {
      console.log(res);
      props.history.push(`/`);
    }
  };

  const forgotPassword = async () => {
    //check email
    if (email === null || email === "") {
      alert("Please Enter Email!");
      return;
    }
    await sendForgotPassEmail(email);
  };

  return (
    <div>
      <Row className="mb-5">
        <Header />
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col className="mb-5" xs={3}>
          <Row style={{ textAlign: "center" }}>
            <h2>Welcome back!</h2>
            <h5 style={{ color: "#aaa9a9" }}>Login to rightbell</h5>
          </Row>
        </Col>
        <Col xs={12} />
        <Col xs={3}>
          <Row>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Email"
                aria-label="email"
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                type="password"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
                aria-label="password"
              />
            </InputGroup>
          </Row>
        </Col>
        <Col xs={12} />
        <Col xs={3}>
          <Row>
            <Col>
              <p
                onClick={forgotPassword}
                style={{ color: "#0B5ED7", cursor: "pointer" }}
              >
                Forgot password ?
              </p>
            </Col>
            <Col>
              <Button
                onClick={handleSubmit}
                disabled={!email || !pass}
                style={{ width: "100%" }}
                variant="primary"
              >
                Login
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={12} />
        <Col className="mt-5" xs={3}>
          <Row>
            <h5 style={{ color: "#aaa9a9" }}>
              Not Registered with RightBell? Please Sign Up to experience our
              Services
            </h5>
          </Row>
          <Row className="justify-content-md-around">
            <Col xs={12}>
              <p
                onClick={() => props.history.push("/ServiceUser")}
                style={{ color: "#0B5ED7", cursor: "pointer" }}
              >
                Service user
              </p>
            </Col>
            <Col>
              <p
                onClick={() => props.history.push("/ServiceProvider")}
                style={{ color: "#0B5ED7", cursor: "pointer" }}
              >
                Service provider
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default Login;
