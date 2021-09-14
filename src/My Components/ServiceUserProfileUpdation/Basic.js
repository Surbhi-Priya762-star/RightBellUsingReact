import React from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import EditIcon from "@material-ui/icons/Edit";

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
          <Button color="secondary">Verify</Button>
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
          <Button color="secondary">Verify</Button>
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
    </div>
  );
}

export default Basic;

{
  /* <div>
<Container className="Main-content">
  <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <form className={classes.form} noValidate>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <h1 className="heading" style={{ margin: "auto" }}>
                  Basic Details
                </h1>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  autoComplete="Name"
                  name="Name"
                  variant="outlined"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  className="Text-field"
                  defaultValue={userInfo.name}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="Email"
                  label="Email"
                  name="Email"
                  autoComplete="Email"
                  type="Email"
                  defaultValue={userInfo.email}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" color="secondary" size="large">
                  Verify
                </Button>
              </Grid>

              <Grid item xs={10}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="Phone NUmber"
                  label="Phone NUmber"
                  name="Phone NUmber"
                  autoComplete="Phone NUmber"
                  type="PhoneNumber"
                  defaultValue={userInfo.phone}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" color="secondary" size="large">
                  Verify
                </Button>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{
                    width: "107px",
                    display: "flex",
                    justifyContent: "space-around",
                    fontSize: " 1.1rem",
                  }}
                >
                  Edit
                  <EditIcon />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  </div>
</Container>
</div> */
}
