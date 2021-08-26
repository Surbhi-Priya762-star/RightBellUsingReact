import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
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
      fontSize:'10px'
     
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      width:'30%',
    },
}));

function Employment() {
    const classes = useStyles();
    

    return (
        <div>
           
         
    <Container className="Main-content" >
    <div className={classes.root}>
      <Grid container spacing={3}>
        
       
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12} >
            <h1 className="heading" style={{margin:'auto'}}>Employment:</h1>
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="Your Position/Designation"
                name="Your Position/Designation"
                variant="outlined"
                required
                fullWidth
                id="Your Position/Designation"
                label="Your Position/Designation"
                className="Text-field"
                
              />
              
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Your Organization"
                label="Your Organization"
                name="Your Organization"
                autoComplete="Your Organization"
               />
               
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="This is my most recent Company."
                
              />
            </Grid>
            <Grid item xs={12}sm={6} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Date"
                label="Started Working From(DD-MM-YYYY)"
                name="Date"
                autoComplete="Date"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="date"
                label="Worked Till     (DD-MM-YYYY)  [ignore if still working]"
                id="date"
                autoComplete="date"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Current Salary"
                label="Current Salary"
                id="Current Salary"
                autoComplete="Current Salary"
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Expected Salary"
                label="Expected Salary"
                id="Expected Salary"
                autoComplete="Expected Salary"
              />
            </Grid>
            <Grid item xs={12}  >
            <TextField
                variant="outlined"
                required
                fullWidth
                name="Job Profile"
                label="Describe Your Job Profile in brief"
                id="Job Profile"
                autoComplete="Job Profile"
              />
               </Grid>
               <Grid item xs={12} sm={6} >
            <TextField
                variant="outlined"
                required
                fullWidth
                name="NoticePeriod"
                label="NoticePeriod(in days)"
                id="NoticePeriod"
                autoComplete="NoticePeriod"
              />
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
            style={{width:'30%'}}
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

export default Employment;
