import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { manageUserInfo } from '../../api';
import EditIcon from '@material-ui/icons/Edit';


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

function Basic() {
  const userInfo = JSON.parse(localStorage.getItem('friday-user-info'));

  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (userInfo == null) {
      history.push(`/`);
    }
  }, []);


  const [edit, setEdit] = useState(false);


  const companyDefault = userInfo.companyInfo ? userInfo.companyInfo[0] || {} : {};

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(value);
    // if (value == '') {
    //   alert('Please select course type!!!');
    //   return;
    // }

    const companyInfo = [
      {
        address: e.target.address.value,
        desc: e.target.desc.value,

      }
    ];

    console.log(companyInfo);
    const data = await manageUserInfo(userInfo.id, { companyInfo: companyInfo });
    if (data.id) {
      // setlocalUserInfo(data);
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
                  <Grid container spacing={4}>
                    <Grid item xs={12} >
                      <h1 className="heading" style={{ margin: 'auto' }}>Basic Details:</h1>
                    </Grid>
                    <Grid item xs={10} >
                      <TextField
                        autoComplete="Name"
                        name="Employer's Name"
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="Employer's Name"
                        className="Text-field"
                        defaultValue={userInfo.name}
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item xs={10}  >
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
                    <Grid item xs={2}  >
                      <Button variant="outlined" color="secondary" size="large">
                        Verify
                      </Button>
                    </Grid>

                    <Grid item xs={10} >
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
                    <Grid item xs={2}  >
                      <Button variant="outlined" color="secondary" size="large">
                        Verify
                      </Button>
                    </Grid>


                    <Grid item xs={10}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="address"
                        label="Company's full Address"
                        name="Address"
                        autoComplete="Address"
                        defaultValue={companyDefault.address}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"

                      />
                    </Grid>
                    {/* <Grid item xs={10} >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="type"
                        label="Industry Type"
                        name="Industry Type"
                        autoComplete="Industry Type"
                        defaultValue={companyDefault.type}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item xs={10} >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="size"
                        label="Company's Strength"
                        name="Company's Strength"
                        autoComplete="Company's Strength"
                        defaultValue={companyDefault.strength}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />
                    </Grid> */}
                    <Grid item xs={12} >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="desc"
                        label="Describe about your Company in brief"
                        name="Description"
                        autoComplete="Description"
                        defaultValue={companyDefault.desc}
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

export default Basic;
