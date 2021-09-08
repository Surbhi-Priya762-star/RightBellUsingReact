import React, { useState, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'; import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import EditIcon from '@material-ui/icons/Edit';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router-dom';
import { manageUserInfo } from '../../api';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(8),
    fontSize: '10px'

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '30%',
  },
}));

function Education({ userInfo }) {
  const [localUserInfo, setlocalUserInfo] = useState(userInfo);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (userInfo == null) {
      history.push(`/`);
    }
    setValue(userInfo.education[0] ? userInfo.education[0].courseType : '');
  }, []);

  const [value, setValue] = React.useState('');

  const [present, setPresent] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleChange = (event) => {
    console.log(event.target);
    if (edit)
      setValue(event.target.value);
  };
  const defaultEducation = localUserInfo.education[0] || {};

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(value);
    if (value == '') {
      alert('Please select course type!!!');
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
      }
    ];

    // console.log(education);
    const data = await manageUserInfo(localUserInfo.id, { education: education });
    if (data.id) {
      setlocalUserInfo(data);
      setEdit(false);
    }
  }





  return (
    <div>

      <Container className="Main-content" >
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
      </Container>

    </div>
  )
}

export default Education
