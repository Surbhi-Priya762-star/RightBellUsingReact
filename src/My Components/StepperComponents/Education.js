/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";

import { RootContainer } from "../../styles/RootContainer";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { EmployementStyle } from "../../styles/EmployementStyle";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";
import { manageUserInfo } from "../../api";

function Education({ userInfo }) {
  const [addEducationCount, setAddEducationCount] = useState([
    {
      schoolName: "",
      yearOfComplition: "",
      recentEducation: true,
      degree: "",
      specialization: "",
      university: "",
      percentage: 0,
      courseType: "",
    }
  ]);
  const [btnDisable, setBtnDisable] = useState(false);
  const history = useHistory();



  const addEducation = () => {
    if (addEducationCount.length < 5) {
      setAddEducationCount((previousData) => [
        ...previousData,
        {
          schoolName: "",
          yearOfComplition: "",
          recentEducation: false,
          degree: "",
          specialization: "",
          university: "",
          percentage: "",
          courseType: "",
        },
      ]);
    } else {
      setBtnDisable(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(addEducationCount);
    // if (present == '') {
    //   alert('Please select prese type!!!');
    //   return;
    // }

    // console.log(education);
    // const data = await manageUserInfo(localUserInfo.id, {
    //   education: education,
    // });
    // if (data.id) {
    //   setlocalUserInfo(data);
    //   setEdit(false);
    // }
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
      margin:'63px auto 160px auto'
    }}
    onSubmit={handleSubmit}
    >
      <div style={{ marginBottom: "30px" }}>
        <h2>Educations Details</h2>
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
              label="School/College"
              name="schoolName"
              value={addEducationCount[index].schoolName}
              onChange={
               (e) =>
                      handleChangeFunc(
                        "schoolName",
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
              label="Year of Compelition"
              type="date"
              name="yearOfComplition"
              value={addEducationCount[index].yearOfComplition}
              onChange={
                (e) =>
                      handleChangeFunc(
                        "yearOfComplition",
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
                  name="recentEducation"
                  checked={addEducationCount[index].recentEducation}
                  onChange={
                    (e) =>
                          handleChangeFunc(
                            "recentEducation",
                            e.target.value,
                            index,
                            addEducationCount
                          )
                  }
                  value="allowExtraEmails"
                  color="primary"
                />
              }
              label="This is my most recent Education."
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
              id="component-helper"
              label="Degree/Highest Qualification"
              name="degree"
              value={addEducationCount[index].degree}
              onChange={
               (e) =>
                      handleChangeFunc(
                        "degree",
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
              label="Specialization"
              name="specialization"
              value={addEducationCount[index].specialization}
              onChange={
               (e) =>
                      handleChangeFunc(
                        "specialization",
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
              justifyContent: "space-between",
            }}
          >
            <TextField
              style={{ width: "45%", fontSize: "1rem" }}
              id="component-helper"
              label="University/Board"
              name="university"
              value={addEducationCount[index].university}
              onChange={
                 (e) =>
                      handleChangeFunc(
                        "university",
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
              label="CGPA/Percentage"
              type="number"
              name="percentage"
              value={addEducationCount[index].percentage}
              onChange={
                (e) =>
                      handleChangeFunc(
                        "percentage",
                        e.target.value,
                        index,
                        addEducationCount
                      )
              }
              aria-describedby="component-helper-text"
            />
          </div>
          <div>
            <FormControl component="fieldset" style={{ marginLeft: "0" }}>
              <FormLabel component="legend">
                <h5 style={{ fontWeight: "900", marginTop: "20px" }}>
                  Course Type:
                </h5>
              </FormLabel>
              <RadioGroup
                id="courseType"
                aria-label="Course Type"
                name="courseType"
                value={addEducationCount[index].courseType}
                onChange={
                  (e) =>
                        handleChangeFunc(
                          "courseType",
                          e.target.value,
                          index,
                          addEducationCount
                        )
                }
              >
                <FormControlLabel
                  value="fullTime"
                  control={<Radio />}
                  label="Full Time"
                />
                <FormControlLabel
                  value="partTime"
                  control={<Radio />}
                  label="Part Time"
                />
                <FormControlLabel
                  value="dlp"
                  control={<Radio />}
                  label="Corresponding/Distant Learning"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </>
      ))}

      <div>
        <Button
          onClick={addEducation}
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
       
      </div>
    </form>
  );
}

export default Education;

