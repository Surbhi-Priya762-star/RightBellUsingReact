import React, { useState, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
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

function Project() {
  const classes = useStyles();
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  const defaultProject = userInfo.project[0] || {};
  const history = useHistory();

  useEffect(() => {
    if (userInfo == null) {
      history.push(`/`);
    }
  }, []);



  const [present, setPresent] = useState(false);
  const [edit, setEdit] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(present);


    const projects = [
      {
        title: e.target.title.value,
        org: e.target.org.value,
        startDate: e.target.startDate.value,
        endDate: e.target.endDate.value,
        clientName: e.target.clientName.value,
        details: e.target.details.value,
      }
    ];

    // console.log(education);
    const data = await manageUserInfo(userInfo.id, { project: projects });
    if (data.id) {
      setEdit(!edit);
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
                  <Grid container spacing={4}>
                    <Grid item xs={12} >
                      <h1 className="heading" style={{ margin: 'auto' }}>Project:</h1>
                    </Grid>
                    <Grid item xs={12} >
                      <TextField
                        autoComplete="Project Title"
                        name="ProjectTitle"
                        variant="outlined"
                        required
                        fullWidth
                        id="title"
                        label="Project Title"
                        className="Text-field"
                        defaultValue={defaultProject.title}
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
                        id="org"
                        label="Project Belongs to your Education/Organization Name:"
                        name="Project-belongs"
                        autoComplete="Project-belongs"
                        defaultValue={defaultProject.org}
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
                        id="clientName"
                        label="For any Client or Self learning"
                        name="Client-SelfLearning"
                        autoComplete="Client-SelfLearning"
                        defaultValue={defaultProject.clientName}
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
                        id="startDate"
                        label="Started Working From(DD-MM-YYYY)"
                        name="Date"
                        autoComplete="Date"
                        defaultValue={defaultProject.startDate}
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
                        defaultValue={defaultProject.endDate}
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
                        name="ProjectDetails"
                        label="Describe Your Project and technologies used in brief"
                        id="details"
                        autoComplete="ProjectDetails"
                        defaultValue={defaultProject.details}
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
export default Project;
