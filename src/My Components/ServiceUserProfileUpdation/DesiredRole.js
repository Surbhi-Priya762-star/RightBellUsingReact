import React, { useEffect, useState } from 'react';


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

function DesiredRole() {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  const defaultDesiredRole = userInfo.desiredRole[0] || {};
  const history = useHistory();


  useEffect(() => {
    if (userInfo == null) {
      history.push(`/`);
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e.target.role.value);
    console.log(e.target.location.value);



    const desiredRole = [{
      role: e.target.role.value,
      location: e.target.location.value,

    }];

    const data = await manageUserInfo(userInfo.id, { desiredRole: desiredRole });
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
                      <h1 className="heading" style={{ margin: 'auto' }}>Please Mention Your Desired Role and Location:</h1>
                    </Grid>
                    <Grid item xs={12} >
                      <TextField
                        autoComplete="Role"
                        name="Role"
                        variant="outlined"
                        required
                        fullWidth
                        id="role"
                        label="Desired Job Role"
                        className="Text-field"
                        defaultValue={defaultDesiredRole.role}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"

                      />

                    </Grid>
                    <Grid item xs={12} >
                      <TextField
                        autoComplete="Location"
                        name="Location"
                        variant="outlined"
                        required
                        fullWidth
                        id="location"
                        label="Preferred Location"
                        className="Text-field"
                        defaultValue={defaultDesiredRole.location}
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
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                        onClick={() => setEdit(!edit)}

                      >
                        {edit ? 'Discard' : 'Edit'}
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

    </div>
  )
}

export default DesiredRole;
