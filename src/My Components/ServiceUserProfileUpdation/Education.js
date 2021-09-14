import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import EditIcon from "@material-ui/icons/Edit";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";
import { manageUserInfo } from "../../api";

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

function Education({ userInfo }) {
  const [addEducationCount, setAddEducationCount] = useState([
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
  const [btnDisable, setBtnDisable] = useState(false)
  const [localUserInfo, setlocalUserInfo] = useState(userInfo);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (userInfo == null) {
      history.push(`/`);
    }
    setValue(userInfo.education[0] ? userInfo.education[0].courseType : "");
  }, []);

  const [value, setValue] = React.useState("");

  const [present, setPresent] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleChange = (event) => {
    console.log(event.target);
    if (edit) setValue(event.target.value);
  };
  const defaultEducation = localUserInfo.education[0] || {};

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
    }else{
      setBtnDisable(true)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    if (value == "") {
      alert("Please select course type!!!");
      return;
    }
    console.log(present);
    // if (present == '') {
    //   alert('Please select prese type!!!');
    //   return;
    // }

    const education = [
      {
        college: e.target.college.value,
        yoc: e.target.yoc.value,
        degree: e.target.degree.value,
        specialization: e.target.specialization.value,
        board: e.target.board.value,
        marks: e.target.marks.value,
        present: present,
        courseType: value,
      },
    ];

    // console.log(education);
    const data = await manageUserInfo(localUserInfo.id, {
      education: education,
    });
    if (data.id) {
      setlocalUserInfo(data);
      setEdit(false);
    }
  };

  return (
    <div
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
    >
      <div style={{ marginBottom: "30px" }}>
        <h2>Educations Details</h2>
      </div>

      {addEducationCount.map((d) => (
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
              // value={userInfo.phone}
              aria-describedby="component-helper-text"
            />
            <TextField
              style={{ width: "45%", fontSize: "1rem" }}
              id="component-helper"
              label="Year of Compelition"
              // value={userInfo.phone}
              aria-describedby="component-helper-text"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={defaultEducation.present}
                  onChange={(e) => setPresent(!present)}
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
              // value={userInfo.phone}
              aria-describedby="component-helper-text"
            />
            <TextField
              style={{ width: "45%", fontSize: "1rem" }}
              id="component-helper"
              label="Specialization"
              // value={userInfo.phone}
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
              // value={userInfo.phone}
              aria-describedby="component-helper-text"
            />
            <TextField
              style={{ width: "45%", fontSize: "1rem" }}
              id="component-helper"
              label="CGPA/Percentage"
              // value={userInfo.phone}
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
                name="Course Type1"
                value={value}
                onChange={handleChange}
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
          style={{
            width: "150px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontSize: "1rem",
            background: "#576574",
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
            fontSize: "1rem",
            background: "#576574",
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
  );
}

export default Education;

{
  /* <Container className="Main-content" >
<div className={classes.root}>
  <Grid container spacing={3}>


    <Grid item xs={12} >
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={4}>
            <Grid item xs={12} >
              <h1 className="heading" style={{ margin: 'auto' }}>Education Details:</h1>
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="College/SchoolName"
                variant="outlined"
                required
                fullWidth
                id="college"
                label="College/SchoolName"
                className="Text-field"
                defaultValue={defaultEducation.college}
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
                id="yoc"
                label="Year of Completion"
                name="Year of Completion"
                autoComplete="Year of Completion"
                defaultValue={defaultEducation.yoc}
                InputProps={{
                  readOnly: !edit,
                }}
                variant="filled"
              />

            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={<Checkbox checked={defaultEducation.present} onChange={(e) => setPresent(!present)} value="allowExtraEmails" color="primary" />}
                label="This is my most recent Education."
                id="present"

              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="degree"
                label="Degree/Highest Qualification"
                name="Degree"
                autoComplete="Degree"
                defaultValue={defaultEducation.degree}
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
                name="specialization"
                label="Specialization"
                id="Specialization"
                autoComplete="Specialization"
                defaultValue={defaultEducation.specialization}
                InputProps={{
                  readOnly: !edit,
                }}
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="board"
                label="University/Board"
                id="University/Board"
                autoComplete="University/Board"
                defaultValue={defaultEducation.board}
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
                name="marks"
                label="CGPA/Percentage"
                id="CGPA/Percentage"
                autoComplete="CGPA/Percentage"
                defaultValue={defaultEducation.marks}
                InputProps={{
                  readOnly: !edit,
                }}
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <FormControl component="fieldset" style={{ marginLeft: '0' }}>
                <FormLabel component="legend"><h4 style={{ fontWeight: '900' }}>Course Type:</h4></FormLabel>
                <RadioGroup id="courseType" aria-label="Course Type" name="Course Type1" value={value} onChange={handleChange}>
                  <FormControlLabel value="fullTime" control={<Radio />} label="Full Time" />
                  <FormControlLabel value="partTime" control={<Radio />} label="Part Time" />
                  <FormControlLabel value="dlp" control={<Radio />} label="Corresponding/Distant Learning" />
                </RadioGroup>
              </FormControl>
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
              // className={classes.submit}
              onClick={() => setEdit(!edit)}

            >
              {edit ? 'Discard' : 'Edit'}
              <EditIcon />
            </Button>
          </Grid>
        </Grid>



      </Paper>
    </Grid>

  </Grid>

</div>
</Container> */
}
