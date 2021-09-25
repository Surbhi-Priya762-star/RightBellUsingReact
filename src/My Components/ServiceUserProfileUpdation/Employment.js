/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { EmployementStyle } from "../../styles/EmployementStyle";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import EditIcon from "@material-ui/icons/Edit";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";
import { manageUserInfo } from "../../api";
import { ToastContainer, toast } from "react-toastify";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { add } from "lodash";

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

function Employment({ userInfo }) {
  const [addEducationCount, setAddEducationCount] = useState([
    {
      position: "web dev",
      org: "abc.pvt.ltd",
      startDate: "2003-09-20",
      endDate: "2004-04-21",
      currentSalary: "150",
      expSalary: "4000000",
      present: false,
      profile: "test  web description ",
      noticePeriod: "45",
    },

    {
      position: "Mobile dev",
      org: "abc.pvt.ltd",
      startDate: "2003-09-20",
      endDate: "2004-04-21",
      currentSalary: "150",
      expSalary: "4000000",
      present: true,
      profile: "test mobile  description ",
      noticePeriod: "45",
    },
  ]);

  const [singleEmp, setSingleEmp] = useState({
    position: "",
    org: "",
    startDate: "",
    endDate: "",
    currentSalary: "",
    expSalary: "",
    present: "",
    profile: "",
    noticePeriod: "",
  });

  const [btnDisable, setBtnDisable] = useState(false);
  const [edit, setEdit] = useState(false);
  const [finalData, setfinalData] = useState(null);
  const [localUserInfo, setlocalUserInfo] = useState(userInfo);

  const classes = useStyles();
  // const userInfo = JSON.parse(localStorage.getItem('user-info'));
  const history = useHistory();

  useEffect(() => {
    // console.log("<><><> ", addEducationCount);
    // console.log(...addEducationCount[addEducationCount.length])
  }, [addEducationCount, singleEmp]);

  console.log("<><><><><>", addEducationCount);

  useEffect(() => {
    if (userInfo == null) {
      history.push(`/`);
    }
    setPresent(userInfo.work[0] ? userInfo.work[0].present : false);
  }, []);

  const [present, setPresent] = useState(false);

  const [work, setWork] = useState(userInfo.work[0] || {});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (addEducationCount.length < 2) {
      console.log("hi sir g", [singleEmp]); // if user enter only one detail -------------> checkpoint
    }

    // setAddEducationCount(finalData)
    // console.log("<><><><> ", e.target)

    // console.log(present);
    // if (present == "") {
    //   alert("Please select course type!!!");
    //   return;
    // }

    const work = addEducationCount;
    console.log("><><><><><>", finalData);

    // // console.log(education);
    // const data = await manageUserInfo(userInfo.id, { work: work });
    // if (data.id) {
    //   setlocalUserInfo(data);
    //   setEdit(false);
    // }
  };

  const addEducation = () => {
    if (!(addEducationCount.length < 5)) {
      setBtnDisable(true);
    }
  };

  const handleChangeFunc = (key, value, index, state) => {
    const obj = { ...state[index] };
    obj[key] = value;
    const arr = [...state];
    arr[index] = obj;
    setAddEducationCount(arr);
  };

  return (
    <form
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        width: "60%",
        height: "auto",
        margin: "auto",
        marginTop: "160px",
        padding: "45px",
        borderRadius: "6px",
      }}
      onSubmit={handleSubmit}
    >
      <div style={{ marginBottom: "30px" }}>
        <h2>Employement Details</h2>
      </div>

      {addEducationCount.map((d, index) => (
        <>
          <div
            style={{
              marginTop: "10px",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              style={{ width: "45%", fontSize: "1rem" }}
              id="component-helper"
              label="Your Position/Designation"
              value={addEducationCount[index].position}
              name="position"
              onChange={
                edit
                  ? (e) => {
                      handleChangeFunc(
                        "position",
                        e.target.value,
                        index,
                        addEducationCount
                      );
                    }
                  : null
              }
              aria-describedby="component-helper-text"
            />
            <TextField
              style={{ width: "45%", fontSize: "1rem" }}
              id="component-helper"
              label="Your Organization"
              name="org"
              value={addEducationCount[index].org}
              onChange={
                edit
                  ? (e) =>
                      handleChangeFunc(
                        "org",
                        e.target.value,
                        index,
                        addEducationCount
                      )
                  : null
              }
              aria-describedby="component-helper-text"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={addEducationCount[index].present}
                  onChange={
                    edit
                      ? (e) =>
                          handleChangeFunc(
                            "present",
                            e.target.value,
                            index,
                            addEducationCount
                          )
                      : null
                  }
                  name="present"
                  value="allowExtraEmails"
                  color="primary"
                />
              }
              label="This is my most recent Company."
              id="present"
            />
          </div>
          <div
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              style={{ width: "45%", fontSize: "1rem" }}
              id="date"
              color="primary"
              label="Starting Work from*"
              type="date"
              // defaultValue="2017-05-24"
              name="startDate"
              value={addEducationCount[index].startDate}
              className={classes.textField}
              onChange={
                edit
                  ? (e) =>
                      handleChangeFunc(
                        "startDate",
                        e.target.value,
                        index,
                        addEducationCount
                      )
                  : null
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ width: "45%", fontSize: "1rem" }}
              id="date"
              label="Work Till*"
              type="date"
              name="endDate"
              // defaultValue="2017-05-24"
              value={addEducationCount[index].endDate}
              className={classes.textField}
              onChange={
                edit
                  ? (e) =>
                      setSingleEmp((previousData) =>
                        handleChangeFunc(
                          "endDate",
                          e.target.value,
                          index,
                          addEducationCount
                        )
                      )
                  : null
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div
            style={{
              marginTop: "30px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              style={{ width: "45%", fontSize: "1rem" }}
              id="component-helper"
              label="Current Salary"
              type="number"
              name="currentSalary"
              value={addEducationCount[index].currentSalary}
              onChange={
                edit
                  ? (e) =>
                      handleChangeFunc(
                        "currentSalary",
                        e.target.value,
                        index,
                        addEducationCount
                      )
                  : null
              }
              aria-describedby="component-helper-text"
            />
            <TextField
              style={{ width: "45%", fontSize: "1rem" }}
              id="component-helper"
              type="number"
              label="Expected Salary"
              name="expSalary"
              value={addEducationCount[index].expSalary}
              onChange={
                edit
                  ? (e) =>
                      handleChangeFunc(
                        "expSalary",
                        e.target.value,
                        index,
                        addEducationCount
                      )
                  : null
              }
              aria-describedby="component-helper-text"
            />
          </div>
          <div
            style={{
              marginTop: "30px",
              marginBottom: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TextareaAutosize
              style={{ width: "100%", fontSize: "1rem", padding: "10px" }}
              aria-label="minimum height"
              minRows={3}
              name="profile"
              value={addEducationCount[index].profile}
              onChange={
                edit
                  ? (e) =>
                      handleChangeFunc(
                        "profile",
                        e.target.value,
                        index,
                        addEducationCount
                      )
                  : null
              }
              placeholder="Describe Your Job Profile in Brief"
            />

            <TextField
              style={{
                width: "45%",
                fontSize: "1rem",
                marginTop: "15px",
                marginBottom: "25px",
              }}
              id="component-helper"
              label="Notice Periods in Days"
              name="notice"
              value={addEducationCount[index].noticePeriod}
              onChange={
                edit
                  ? (e) =>
                      handleChangeFunc(
                        "notice",
                        e.target.value,
                        index,
                        addEducationCount
                      )
                  : null
              }
              aria-describedby="component-helper-text"
            />
          </div>
        </>
      ))}

      <div>
        <Button
          type="button"
          onClick={() => {
            addEducation();
            setAddEducationCount((previousData) => [
              ...previousData,
              singleEmp,
            ]);
          }}
          style={{ width: "100%" }}
          color="primary"
          disabled={btnDisable}
        >
          Add Education +{" "}
        </Button>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "35px",
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
        <Button
          style={{ ...EmployementStyle.btnStyle }}
          type="submit"
          onClick={() => {
            setEdit((previousData) => !previousData);
          }}
          fullWidth
          variant="contained"
          color="primary"
        >
          {edit ? "Cancel" : "Edit"}
          {!edit ? <i class="fas fa-pen"></i> : null}
        </Button>
      </div>
    </form>
  );
}

export default Employment;

{
  /* <div>


<Container className="Main-content" >
  <div className={classes.root}>
    <Grid container spacing={3}>


      <Grid item xs={12} >
        <Paper className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <h1 className="heading" style={{ margin: 'auto' }}>Employment:</h1>
              </Grid>
              <Grid item xs={12} >
                <TextField
                  autoComplete="Your Position/Designation"
                  name="Your Position/Designation"
                  variant="outlined"
                  required
                  fullWidth
                  id="position"
                  label="Your Position/Designation"
                  className="Text-field"
                  defaultValue={work.position}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="filled"

                />

              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="org"
                  label="Your Organization"
                  name="Your Organization"
                  autoComplete="Your Organization"
                  defaultValue={work.org}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="filled"
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={<Checkbox checked={work.present} onChange={() => setPresent(!present)} value="allowExtraEmails" color="primary" />}
                  label="This is my most recent Company."

                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="startDate"
                  label="Started Working From(DD-MM-YYYY)"
                  name="Date"
                  autoComplete="Date"
                  defaultValue={work.startDate}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="date"
                  label="Worked Till     (DD-MM-YYYY)  [ignore if still working]"
                  id="endDate"
                  autoComplete="date"
                  defaultValue={work.endDate}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="currentSalary"
                  label="Current Salary"
                  id="currentSalary"
                  autoComplete="Current Salary"
                  defaultValue={work.currentSalary}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="expectedSalary"
                  label="Expected Salary"
                  id="expSalary"
                  autoComplete="Expected Salary"
                  defaultValue={work.expSalary}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}  >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Job Profile"
                  label="Describe Your Job Profile in brief"
                  id="profile"
                  autoComplete="Job Profile"
                  defaultValue={work.profile}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="filled"

                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="NoticePeriod"
                  label="NoticePeriod(in days)"
                  id="notice"
                  autoComplete="NoticePeriod"
                  defaultValue={work.noticePeriod}
                  InputProps={{
                    readOnly: !edit,
                  }}
                  variant="filled"

                />
              </Grid>
            </Grid>
            {edit && <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>}
          </form>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ width: '30%' }}
                onClick={() => setEdit(!edit)}
              >
                Edit
                <EditIcon />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

    </Grid>
  </div>
</Container>

</div> */
}
