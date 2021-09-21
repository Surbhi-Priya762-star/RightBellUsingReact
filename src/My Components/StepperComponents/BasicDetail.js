import React from "react";
import TextField from "@material-ui/core/TextField";
import { EmployementStyle } from "../../styles/EmployementStyle";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";

function BasicDetail({ userInfo }) {
  const [emailModal, setEmailModal] = React.useState(false);
  const [mobileModal, setMobileModal] = React.useState(false);
  const [basicDetail, setBasicDetail] = React.useState({
    Name: "",
    email: "",
    phoneNumber: "",
    DOB: "",
  });

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("hii")
    console.log(basicDetail);
  };

  return (
    <form
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        width: "60%",
        height: "auto",
        padding: "45px",
        borderRadius: "6px",
        margin: "63px auto 160px auto",
      }}
      onSubmit={handleSubmit}
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
            name="Name"
            value={basicDetail.Name}
            onChange={(e) =>
              setBasicDetail((previousData) => ({
                ...previousData,
                Name: e.target.value,
              }))
            }
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
            name="email"
            value={basicDetail.email}
            onChange={(e) =>
              setBasicDetail((previousData) => ({
                ...previousData,
                email: e.target.value,
              }))
            }
            aria-describedby="component-helper-text"
          />
          <Button
            onClick={() => {
              console.log("verify");
              setEmailModal(true);
            }}
            color="secondary"
          >
            Verify
          </Button>
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
            name="phoneNumber"
            type="number"
            value={basicDetail.phoneNumber}
            onChange={(e) =>
              setBasicDetail((previousData) => ({
                ...previousData,
                phoneNumber: e.target.value,
              }))
            }
            aria-describedby="component-helper-text"
          />
          <Button
            onClick={() => {
              console.log("verify");
              setMobileModal(true);
            }}
            color="secondary"
          >
            Verify
          </Button>
        </div>

        <div style={{ marginTop: "30px", marginBottom: "20px" }}>
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            style={{ fontSize: "23px" }}
          >
            Date of Birth
          </InputLabel>

          <TextField
            style={{ width: "75%", fontSize: "1rem" }}
            id="component-helper"
            type="date"
            value={basicDetail.DOB}
            name="DOB"
            onChange={(e) =>
              setBasicDetail((previousData) => ({
                ...previousData,
                DOB: e.target.value,
              }))
            }
            aria-describedby="component-helper-text"
          />
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
            style={{ ...EmployementStyle.btnStyle }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Save
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
          <Typography style={{ fontSize: 22, fontWeight: "bold" }}>
            Verify Mobile Number
          </Typography>
          <TextField
            style={{ width: "100%", height: 40 }}
            placeholder="Enter Otp"
          />
          <Button
            type="button"
            color="secondary"
            variant="contained"
            title="Verify Otp"
          >
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
          <Typography style={{ fontSize: 22, fontWeight: "bold" }}>
            Verify Mobile
          </Typography>
          <TextField
            style={{ width: "100%", height: 40 }}
            placeholder="Enter Otp"
          />
          <Button
            type="button"
            color="secondary"
            variant="contained"
            title="Verify Otp"
          >
            Verify Otp
          </Button>
        </Box>
      </Modal>
    </form>
  );
}

export default BasicDetail;
const style = {
  borderRadius: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 150,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
