import React, { useState, useEffect } from 'react';


import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
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

function Accomplishment() {
  const classes = useStyles();
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  const defaultAccomplishment = userInfo.accomplishment[0] || {};
  const history = useHistory();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (userInfo == null) {
      history.push(`/`);
    }
  }, []);





  const handleSubmit = async (e) => {
    e.preventDefault()



    const accomplishment = [
      {
        title: e.target.title.value,
        org: e.target.org.value,
        date: e.target.date.value,
        details: e.target.details.value,
      }
    ];

    // console.log(education);
    const data = await manageUserInfo(userInfo.id, { accomplishment: accomplishment });
    if (data.id) {
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
                  <Grid container spacing={5}>
                    <Grid item xs={12} >
                      <h1 className="heading" style={{ margin: 'auto' }}>Accomplishment: </h1>
                    </Grid>
                    <Grid item xs={12} >
                      <h4>Please add or Upload Details of Your Certificate You have achieved or completed related to your desired job Profile if any: </h4>

                    </Grid>
                    <Grid item xs={12}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="title"
                        label="CertificateName"
                        name="CertificateName"
                        autoComplete="CertificateName"
                        defaultValue={defaultAccomplishment.title}
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
                        label="Certified By: Organization/InstituteName:"
                        name="CertifiedBy"
                        autoComplete="CertifiedBy"
                        defaultValue={defaultAccomplishment.org}
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
                        id="date"
                        label="Date of Completion(DD-MM-YYYY)"
                        name="Date"
                        autoComplete="Date"
                        defaultValue={defaultAccomplishment.date}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item xs={10}   >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="details"
                        label="Upload Your Certificate"
                        name="File"
                        autoComplete="File"
                        defaultValue={defaultAccomplishment.details}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item xs={2}   >
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
                      style={{ width: '70%' }}
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
      </Container >

    </div >
  )
}
export default Accomplishment;
