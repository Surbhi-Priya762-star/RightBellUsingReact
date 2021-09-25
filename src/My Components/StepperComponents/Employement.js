/* eslint-disable no-lone-blocks */
import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { EmployementStyle } from "../../styles/EmployementStyle";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { manageUserInfo } from "../../api";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { add } from "lodash";
import { stepperNextContext } from "../../utils/stepperNextContext";

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
  const {
    currentPage,
    setCurrentPage,
    setActiveStep,
    activeStep,
    skipped,
    setSkipped,
  } = useContext(stepperNextContext);
  const [addEducationCount, setAddEducationCount] = useState([
    {
      position: "",
      org: "",
      startDate: "",
      endDate: "",
      currentSalary: "",
      expSalary: "",
      present: false,
      profile: "",
      noticePeriod: "",
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
    notice: "",
  });

  const [btnDisable, setBtnDisable] = useState(false);

  const classes = useStyles();
  // const userInfo = JSON.parse(localStorage.getItem('friday-user-info'));
  const history = useHistory();

  useEffect(() => {
    // console.log("<><><> ", addEducationCount);
    // console.log(...addEducationCount[addEducationCount.length])
  }, [addEducationCount, singleEmp]);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentPage((previousData) => previousData + 1);
    handleNext();
    console.log(addEducationCount);
    // setAddEducationCount(finalData)
    // console.log("<><><><> ", e.target)

    // console.log(present);
    // if (present == "") {
    //   alert("Please select course type!!!");
    //   return;
    // }

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
        padding: "45px",
        borderRadius: "6px",
        margin: "63px auto 160px auto",
        marginTop: "173px",
        marginBottom: "5px",
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
              onChange={(e) => {
                handleChangeFunc(
                  "position",
                  e.target.value,
                  index,
                  addEducationCount
                );
              }}
              aria-describedby="component-helper-text"
            />
            <TextField
              style={{ width: "45%", fontSize: "1rem" }}
              id="component-helper"
              label="Your Organization"
              name="org"
              value={addEducationCount[index].org}
              onChange={(e) =>
                handleChangeFunc(
                  "org",
                  e.target.value,
                  index,
                  addEducationCount
                )
              }
              aria-describedby="component-helper-text"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={addEducationCount[index].present}
                  onChange={(e) =>
                    handleChangeFunc(
                      "present",
                      e.target.value,
                      index,
                      addEducationCount
                    )
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
              onChange={(e) =>
                handleChangeFunc(
                  "startDate",
                  e.target.value,
                  index,
                  addEducationCount
                )
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
              onChange={(e) =>
                setSingleEmp((previousData) =>
                  handleChangeFunc(
                    "endDate",
                    e.target.value,
                    index,
                    addEducationCount
                  )
                )
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
              onChange={(e) =>
                handleChangeFunc(
                  "currentSalary",
                  e.target.value,
                  index,
                  addEducationCount
                )
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
              onChange={(e) =>
                handleChangeFunc(
                  "expSalary",
                  e.target.value,
                  index,
                  addEducationCount
                )
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
              onChange={(e) =>
                handleChangeFunc(
                  "profile",
                  e.target.value,
                  index,
                  addEducationCount
                )
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
              type="number"
              value={addEducationCount[index].notice}
              onChange={(e) =>
                handleChangeFunc(
                  "notice",
                  e.target.value,
                  index,
                  addEducationCount
                )
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
          Add Employement +{" "}
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
          Next
        </Button>
      </div>
    </form>
  );
}

export default Employment;
