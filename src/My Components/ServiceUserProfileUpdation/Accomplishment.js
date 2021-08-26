import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';


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
      width:'30%',
    },
}));

function Accomplishment() {
    const classes = useStyles();
   
    return (
        <div>
            <Header/>
            <h1 className="heading">Accomplishment:</h1>
    <Container className="Main-content" >
    <div className={classes.root}>
      <Grid container spacing={3}>
        
       
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          <form className={classes.form} noValidate>
          <Grid container spacing={5}>
            <Grid item xs={12} >
             <h4>Please add or Upload Details of Your Certificate You have achieved or completed related to your desired job Profile if any:</h4>
              
            </Grid>
            <Grid item xs={12}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="CertificateName"
                label="CertificateName"
                name="CertificateName"
                autoComplete="CertificateName"
               />
               
            </Grid>
            <Grid item xs={12}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="CertifiedBy"
                label="Certified By: Organization/InstituteName:"
                name="CertifiedBy"
                autoComplete="CertifiedBy"
               />
               
            </Grid>
           
            <Grid item xs={12}sm={6} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Date"
                label="Date of Completion(DD-MM-YYYY)"
                name="Date"
                autoComplete="Date"
              />
            </Grid>
           <Grid item xs={10}   >
           <TextField
                variant="outlined"
                required
                fullWidth
                id="File"
                label="Upload Your Certificate"
                name="File"
                autoComplete="File"
                />
             </Grid> 
             <Grid item xs={2}   >
            <Button
             variant="contained"
             component="label"
            color="primary"
            startIcon={<CloudUploadIcon />}
            size="Medium"
             style={{ marginRight:'40px'}}
                   >
             Upload File
               <input
                  type="file"
                      hidden
                     />
               </Button>
              
               </Grid>
              
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<SaveIcon />}
            size="large"
            style={{marginTop:'70px'}}
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
            size="large"
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
          <Footer/>  
        </div>
    )
}
export default Accomplishment;
