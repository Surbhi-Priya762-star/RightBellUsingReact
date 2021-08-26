import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import EditIcon from '@material-ui/icons/Edit';
import FormLabel from '@material-ui/core/FormLabel';


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
      fontSize:'10px'
     
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      width:'30%',
    },
}));

function Education() {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
    return (
        <div>
     
    <Container className="Main-content" >
    <div className={classes.root}>
      <Grid container spacing={3}>
        
       
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          <form className={classes.form} noValidate>
            <Grid container spacing={4}>
            <Grid item xs={12} >
            <h1 className="heading" style={{margin:'auto'}}>Education Details:</h1>
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="College/SchoolName"
                variant="outlined"
                required
                fullWidth
                id="College/SchoolName"
                label="College/SchoolName"
                className="Text-field"
                
              />
              
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Year of Completion"
                label="Year of Completion"
                name="Year of Completion"
                autoComplete="Year of Completion"
               />
               
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="This is my most recent Education."
                
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Degree"
                label="Degree/Highest Qualification"
                name="Degree"
                autoComplete="Degree"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Specialization"
                label="Specialization"
                id="Specialization"
                autoComplete="Specialization"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="University/Board"
                label="University/Board"
                id="University/Board"
                autoComplete="University/Board"
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="CGPA/Percentage"
                label="CGPA/Percentage"
                id="CGPA/Percentage"
                autoComplete="CGPA/Percentage"
              />
            </Grid>
            <Grid item xs={12} sm={6} >
            <FormControl component="fieldset" style={{marginLeft:'0'}}>
                <FormLabel component="legend"><h4 style={{fontWeight:'900'}}>Course Type:</h4></FormLabel>
                   <RadioGroup aria-label="Course Type" name="Course Type1" value={value} onChange={handleChange}>
                   <FormControlLabel value="Full Time" control={<Radio />} label="Full Time" />
                  <FormControlLabel value="Part Time" control={<Radio />} label="Part Time" />
                  <FormControlLabel value="other" control={<Radio />} label="Corresponding/Distant Learning" />
                </RadioGroup>
               </FormControl>
               </Grid>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          
          >
            Edit
            <EditIcon/>
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

export default Education
