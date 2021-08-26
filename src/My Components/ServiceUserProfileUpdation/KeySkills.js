import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';


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

function Basic() {
    const classes = useStyles();

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
            <h1 className="heading" style={{margin:'auto'}}>Please Mention Your Skills separated by comma:</h1>
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="Name"
                name="Skills"
                variant="outlined"
                required
                fullWidth
                id="Skills"
                label="Skills"
                className="Text-field"
                
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

export default Basic;