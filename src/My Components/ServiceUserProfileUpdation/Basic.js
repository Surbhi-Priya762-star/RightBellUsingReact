import React from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import EditIcon from "@material-ui/icons/Edit";
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

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
    marginTop: theme.spacing(8),
    fontSize: "10px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "30%",
  },
}));

function Basic({ userInfo }) {
  const [emailModal, setEmailModal] = React.useState(false);
  const [mobileModal, setMobileModal] = React.useState(false);
  const classes = useStyles();

  console.log(">>>>>", userInfo);

  return (
    <div
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        width: "60%",
        margin: "auto",
        marginTop: "160px",
        padding: "45px",
        borderRadius: "6px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h2>Basic Details</h2>
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ marginTop: "30px", marginBottom: "20px" }}>
          <TextField
            style={{ width: "75%", fontSize: "1rem" }}
            id="component-helper"
            label="Name"
            value={userInfo.name}
            aria-describedby="component-helper-text"
          />
        </div>
        <div
          style={{
            marginTop: "30px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <TextField
            style={{ width: "75%", fontSize: "1rem" }}
            id="component-helper"
            label="Email"
            value={userInfo.email}
            aria-describedby="component-helper-text"
          />
          <Button onClick={() => {
            console.log('verify')
            setEmailModal(true)
          }} color="secondary">Verify</Button>
        </div>
        <div
          style={{
            marginTop: "30px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <TextField
            style={{ width: "75%", fontSize: "1rem" }}
            id="component-helper"
            label="Phone Number"
            value={userInfo.phone}
            aria-describedby="component-helper-text"
          />
          <Button onClick={() => {
            console.log('verify')
            setMobileModal(true)
          }} color="secondary">Verify</Button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "55px",
          }}
        >
          <Button
            style={{
              width: "150px",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize:'1rem',
              background:'#576574'
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            style={{
              width: "150px",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize:'1rem',
              background:'#576574'
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Edit
            <i class="fas fa-pen"></i>
          </Button>
        </div>
      </div>
      <Modal
        open={mobileModal}
        onClose={() => setMobileModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{fontSize: 22, fontWeight: 'bold'}}>
            Verify Mobile Number
          </Typography>
          <TextField 
            style={{width: '100%', height: 40 }}
            placeholder="Enter Otp"
          />
          <Button color="secondary" variant="contained" title="Verify Otp" >
            Verify Otp
          </Button>
        </Box>
      </Modal>
      <Modal
        open={emailModal}
        onClose={() => setEmailModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{fontSize: 22, fontWeight: 'bold'}}>
            Verify Mobile
          </Typography>
          <TextField 
            style={{width: '100%', height: 40 }}
            placeholder="Enter Otp"
          />
          <Button color="secondary" variant="contained" title="Verify Otp" >
            Verify Otp
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Basic;
const style = {
  borderRadius: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 150,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

