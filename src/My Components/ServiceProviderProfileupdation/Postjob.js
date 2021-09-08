import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import { useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
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


  formControl: {
    margin: theme.spacing(1),


  },

  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Delhi',
  'Kolkata',
  'Bangalore',
  'Mumbai',
  'Pune',
  'Gujrat',
  'Haryana',

];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


function Postjob() {
  const history = useHistory();

  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('friday-user-info')));
  useEffect(() => {
    if (userInfo == null) {
      history.push(`/`);
    }
  }, []);
  const postJobDefault = userInfo.postJob ? userInfo.postJob[0] || {} : {};

  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const [experience, setExperience] = React.useState('');

  const handleChanged = (event) => {
    setExperience(event.target.value);
  };
  const [salary, setSalary] = React.useState('');

  const handleChanged1 = (event) => {
    setSalary(event.target.value);
  };

  const [education, setEducation] = React.useState('');

  const handleChanged2 = (event) => {
    setEducation(event.target.value);
  };

  const [edit, setEdit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(value);
    if (salary == '' || experience == '' || education == '' || personName == '') {
      alert('please fill all fields');
      return;
    }

    const postJob = [
      {
        role: e.target.role.value,
        responsiblity: e.target.responsiblity.value,
        openingCount: e.target.openingCount.value,
        salaryRange: salary,
        experience: experience,
        education: education,
        officeLocation: personName,

      }
    ];

    console.log(postJob);
    const data = await manageUserInfo(userInfo.id, { postJob: postJob });
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
                  <Grid container spacing={5}>
                    <Grid item xs={12} >
                      <h1 className="heading" style={{ margin: 'auto' }}>Job Profile Details:</h1>
                    </Grid>

                    <Grid item xs={8}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="role"
                        label="Role:"
                        name="Role"
                        autoComplete="Role"
                        defaultValue={postJobDefault.role}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />
                    </Grid>

                    <Grid item xs={8}  >
                      <FormControl className={classes.formControl} style={{ width: '800px' }}>
                        <InputLabel id="demo-simple-select-label">Experience Required:</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={experience == '' ? postJobDefault.experience : experience}

                          onChange={handleChanged}
                        >
                          <MenuItem value={'fresher'}>Fresher</MenuItem>
                          <MenuItem value={'0-6Months'}>0-6months</MenuItem>
                          <MenuItem value={'1Year'}>1 year</MenuItem>
                          <MenuItem value={'2Year'}>2 years</MenuItem>
                          <MenuItem value={'3Year'}>3 years</MenuItem>
                          <MenuItem value={'4Year'}>4 years</MenuItem>
                          <MenuItem value={'5Year'}>5 years</MenuItem>
                          <MenuItem value={'6Year'}>6 years And Above</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={8}  >
                      <FormControl className={classes.formControl} style={{ width: '800px' }}>
                        <InputLabel id="demo-simple-select-label">Salary Range:</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={salary == '' ? postJobDefault.salaryRange || '' : salary}
                          onChange={handleChanged1}
                        >
                          <MenuItem value={'10-20k'}>10k to 20k</MenuItem>
                          <MenuItem value={'20-30k'}>20k to 30 k</MenuItem>
                          <MenuItem value={'30-40k'}>30k to 40k</MenuItem>
                          <MenuItem value={'40-50k'}>40k to 50k</MenuItem>
                          <MenuItem value={'50 to above'}>50k to above</MenuItem>

                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={8}  >
                      <FormControl className={classes.formControl} style={{ width: '800px' }}>
                        <InputLabel id="demo-simple-select-label">Education:</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={education == '' ? postJobDefault.education || '' : education}
                          onChange={handleChanged2}
                        >
                          <MenuItem value={'any'}>Any Graduate</MenuItem>
                          <MenuItem value={'BE'}>B.E./B.Tech</MenuItem>
                          <MenuItem value={'PG'}>Post Graduate</MenuItem>
                          <MenuItem value={'ME'}>M.tech/M.E.</MenuItem>
                          <MenuItem value={'MBA'}>M.B.A.</MenuItem>
                          <MenuItem value={'12'}>12th or euivalent</MenuItem>
                          <MenuItem value={'10'}>10th or euivalent</MenuItem>

                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="responsiblity"
                        label="Requirement and Responsibility for this jon in brief:"
                        name="Responsibility"
                        autoComplete="Responsibility"
                        defaultValue={postJobDefault.responsiblity}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item xs={4}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="openingCount"
                        label="Number Of Opening:"
                        name="Number Of Opening"
                        autoComplete="Number Of Opening"
                        defaultValue={postJobDefault.openingCount}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />
                    </Grid>



                    <Grid item xs={8}  >

                      <FormControl className={classes.formControl} style={{ width: '600px' }}>
                        <InputLabel id="demo-mutiple-chip-label">Office Location:</InputLabel>
                        <Select
                          labelId="demo-mutiple-chip-label"
                          id="demo-mutiple-chip"
                          multiple
                          value={personName == '' ? postJobDefault.officeLocation || [] : personName}
                          onChange={handleChange}
                          input={<Input id="select-multiple-chip" />}
                          renderValue={(selected) => (
                            <div className={classes.chips}>
                              {selected.map((value) => (
                                <Chip key={value} label={value} className={classes.chip} />
                              ))}
                            </div>
                          )}
                          MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>


                    </Grid>





                    <Grid item xs={8}  >
                      <h4 style={{ fontWeight: '700' }}>Please attach JD for this job Profile in PDF:</h4>

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
                    style={{ marginTop: '90px' }}
                  >
                    Post This Job
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
export default Postjob;
