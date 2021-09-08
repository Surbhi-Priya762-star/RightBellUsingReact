import React, { useState, useEffect } from 'react';


import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import { ToastContainer, toast } from 'react-toastify';
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

function Employment({ userInfo }) {
  const [localUserInfo, setlocalUserInfo] = useState(userInfo);

  const classes = useStyles();
  // const userInfo = JSON.parse(localStorage.getItem('friday-user-info'));
  const history = useHistory();

  useEffect(() => {
    if (userInfo == null) {
      history.push(`/`);
    }
    setPresent(userInfo.work[0] ? userInfo.work[0].present : false);

  }, []);



  const [present, setPresent] = useState(false);

  const [work, setWork] = useState(userInfo.work[0] || {});
  const [edit, setEdit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(present);
    if (present == '') {
      toast.error('Please select course type!!!');
      return;
    }

    const work = [
      {
        position: e.target.position.value,
        org: e.target.org.value,
        startDate: e.target.startDate.value,
        endDate: e.target.endDate.value,
        currentSalary: e.target.currentSalary.value,
        expSalary: e.target.expSalary.value,
        present: present,
        profile: e.target.profile.value,
        noticePeriod: e.target.notice.value
      }
    ];

    // console.log(education);
    const data = manageUserInfo(userInfo.id, { work: work });
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
                        control={<Checkbox onChange={() => setPresent(!present)} value="allowExtraEmails" color="primary" />}
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

    </div>
  )
}

export default Employment;
