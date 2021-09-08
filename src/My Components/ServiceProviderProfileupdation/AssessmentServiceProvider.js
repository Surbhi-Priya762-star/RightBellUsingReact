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


function Assessment() {
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('friday-user-info')));

  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (userInfo == null) {
      history.push(`/`);
    }
  }, []);

  const [edit, setEdit] = useState(false);


  const defaultCompany = userInfo.company[0] || {};

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(value);

    // console.log(present);
    // if (present == '') {
    //   alert('Please select prese type!!!');
    //   return;
    // }

    const company = [
      {
        website: e.target.website.value,
        headOffice: e.target.headOffice.value,
        locations: personName,
        size: e.target.size.value,
        type: age,
        gst: e.target.gst.value,
        itr: e.target.itr.value,
      }
    ];

    console.log(company);
    const data = await manageUserInfo(userInfo.id, { company: company });
    if (data.id) {
      // setlocalUserInfo(data);
      setEdit(false);
    }
  }


  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    if (edit)
      setPersonName(event.target.value);
  };



  const [age, setAge] = useState('');

  const handleChanged = (event) => {
    setAge(event.target.value);
  };











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
                      <h1 className="heading" style={{ margin: 'auto' }}>Please Update Few things about Company:</h1>
                    </Grid>

                    <Grid item xs={8}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="website"
                        label="Company's Website link"
                        name="WebsiteLink"
                        autoComplete="WebsiteLink"
                        defaultValue={defaultCompany.website}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />
                    </Grid>

                    <Grid item xs={8} >

                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="headOffice"
                        label="HeadQuarter"
                        name="HeadQuarter"
                        autoComplete="HeadQuarter"
                        defaultValue={defaultCompany.headOffice}
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
                        defaultValue={defaultCompany.size}
                        InputProps={{
                          readOnly: !edit,
                        }}
                        variant="filled"
                      />
                    </Grid>


                    <Grid item xs={8}  >

                      <FormControl className={classes.formControl} style={{ width: '800px' }}>
                        <InputLabel id="demo-mutiple-chip-label">Office Location:</InputLabel>
                        <Select
                          labelId="demo-mutiple-chip-label"
                          id="locations"
                          multiple

                          InputProps={{
                            readOnly: !edit,
                          }}
                          variant="filled"
                          value={personName == '' ? defaultCompany.locations || [] : personName}
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
                      <FormControl className={classes.formControl} style={{ width: '800px' }}>
                        <InputLabel id="demo-simple-select-label">Company's Type:</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="type"
                          value={age == '' ? defaultCompany.type || '' : age}
                          onChange={handleChanged}
                          defaultValue={defaultCompany.type}
                          InputProps={{
                            readOnly: !edit,
                          }}
                          variant="filled"
                        >
                          <MenuItem value={'gov'}>Government</MenuItem>
                          <MenuItem value={'private'}>Private</MenuItem>
                          <MenuItem value={'public'}>Public Sector</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} >
                      <h4 style={{ fontWeight: '700' }}>Upload these Documents for verification:</h4>
                    </Grid>
                    <Grid item xs={8}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="itr"
                        label="ITR Document"
                        name="ITRDocument"
                        autoComplete="ITRDocument"
                        defaultValue={defaultCompany.itr}
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

                    <Grid item xs={8}  >
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="gst"
                        label="GST Document"
                        name="GST Document"
                        autoComplete="GST Document"
                        defaultValue={defaultCompany.gst}
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
