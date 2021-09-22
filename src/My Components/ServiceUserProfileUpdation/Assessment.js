import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
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
    width: '30%',
  },
}));

function Assessment() {
  const classes = useStyles();
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  const defaultAssess = userInfo.assessment[0] || {};
  const history = useHistory();
  const [edit, setEdit] = useState(false);


  useEffect(() => {
    if (userInfo == null) {
      history.push(`/`);
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e.target.address.value);
    console.log(e.target.gradCGPA.value);
    console.log(e.target.twoCGPA.value);
    console.log(e.target.tenCGPA.value);
    console.log(e.target.expName.value);



    const assessment = [{
      address: e.target.address.value,
      gradCGPA: e.target.gradCGPA.value,
      twelveCGPA: e.target.twoCGPA.value,
      tenCGPA: e.target.tenCGPA.value,
      expName: e.target.expName.value,
    }];
    console.log(assessment);

    const data = await manageUserInfo(userInfo.id, { assessment: assessment });
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
                  <Grid container spacing={5}>
                    <Grid item xs={12} >
                      <h1 className="heading" style={{ margin: 'auto' }}>Please Upload Few Documents:</h1>
                    </Grid>
                    <Grid item xs={6} >
                      <h4>Upload any Government Id with Address Proof:</h4>

                    </Grid>
                    <Grid item xs={4}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="address"
                        label="FileName"
                        name="FileName"
                        autoComplete="FileName"
                        defaultValue={defaultAssess.address}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />

                    </Grid>
                    <Grid item xs={2}  >
                      <Button
                        variant="contained"
                        component="label"
                        color="primary"
                        startIcon={<CloudUploadIcon />}
                        size="Medium"
                        style={{ marginRight: '40px' }}
                      >
                        Upload File
                        <input
                          type="file"
                          hidden
                        />
                      </Button>

                    </Grid>
                    <Grid item xs={6} >
                      <h4>Upload Your Graduation Certificate:</h4>

                    </Grid>
                    <Grid item xs={4}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="gradCGPA"
                        label="CGPA/Percentage"
                        name="CGPA-Percentage"
                        autoComplete="CGPA-Percentage"
                        defaultValue={defaultAssess.gradCGPA}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />

                    </Grid>
                    <Grid item xs={2}  >
                      <Button
                        variant="contained"
                        component="label"
                        color="primary"
                        startIcon={<CloudUploadIcon />}
                        size="Medium"
                        style={{ marginRight: '40px' }}
                      >
                        Upload File
                        <input
                          type="file"
                          hidden
                        />
                      </Button>

                    </Grid>
                    <Grid item xs={6} >
                      <h4>Upload your 12th/Equivalent Certificate:</h4>

                    </Grid>
                    <Grid item xs={4}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="twoCGPA"
                        label="CGPA/Percentage"
                        name="CGPA-Percentage"
                        autoComplete="CGPA-Percentage"
                        defaultValue={defaultAssess.twelveCGPA}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />

                    </Grid>
                    <Grid item xs={2}  >
                      <Button
                        variant="contained"
                        component="label"
                        color="primary"
                        startIcon={<CloudUploadIcon />}
                        size="Medium"
                        style={{ marginRight: '40px' }}
                      >
                        Upload File
                        <input
                          type="file"
                          hidden
                        />
                      </Button>

                    </Grid>
                    <Grid item xs={6} >
                      <h4>Upload your 10th/Equivalent Certificate:</h4>

                    </Grid>
                    <Grid item xs={4}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="tenCGPA"
                        label="CGPA/Percentage"
                        name="CGPA-Percentage"
                        autoComplete="CGPA-Percentage"
                        defaultValue={defaultAssess.tenCGPA}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />

                    </Grid>
                    <Grid item xs={2}  >
                      <Button
                        variant="contained"
                        component="label"
                        color="primary"
                        startIcon={<CloudUploadIcon />}
                        size="Medium"
                        style={{ marginRight: '40px' }}
                      >
                        Upload File
                        <input
                          type="file"
                          hidden
                        />
                      </Button>

                    </Grid>
                    <Grid item xs={6} >
                      <h4>Upload your Experience Letter if any:</h4>

                    </Grid>
                    <Grid item xs={4}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="expName"
                        label="Organization Name"
                        name="OrganizationName"
                        autoComplete="OrganizationName"
                        defaultValue={defaultAssess.expName}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />

                    </Grid>
                    <Grid item xs={2}  >
                      <Button
                        variant="contained"
                        component="label"
                        color="primary"
                        startIcon={<CloudUploadIcon />}
                        size="Medium"
                        style={{ marginRight: '40px' }}
                      >
                        Upload File
                        <input
                          type="file"
                          hidden
                        />
                      </Button>

                    </Grid>




                  </Grid>
                  {edit && <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    startIcon={<SaveIcon />}
                    size="large"
                    style={{ marginTop: '70px' }}
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
                      size="large"
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
export default Assessment;
