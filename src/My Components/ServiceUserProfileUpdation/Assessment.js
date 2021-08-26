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

function Assessment() {
    const classes = useStyles();
   
    return (
        <div>
            <Header/>
            <h1 className="heading">Please attach few Documents:</h1>
    <Container className="Main-content" >
    <div className={classes.root}>
      <Grid container spacing={3}>
        
       
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          <form className={classes.form} noValidate>
          <Grid container spacing={5}>
            <Grid item xs={6} >
             <h4>Upload any Government Id with Address Proof:</h4>
              
            </Grid>
            <Grid item xs={4}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="FileName"
                label="FileName"
                name="FileName"
                autoComplete="FileName"
               />
               
            </Grid>
            <Grid item xs={2}  >
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
            <Grid item xs={6} >
             <h4>Upload Your Graduation Certificate:</h4>
              
            </Grid>
            <Grid item xs={4}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="CGPA-Percentage"
                label="CGPA/Percentage"
                name="CGPA-Percentage"
                autoComplete="CGPA-Percentage"
               />
               
            </Grid>
            <Grid item xs={2}  >
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
            <Grid item xs={6} >
             <h4>Upload your 12th/Equivalent Certificate:</h4>
              
            </Grid>
            <Grid item xs={4}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="CGPA-Percentage"
                label="CGPA/Percentage"
                name="CGPA-Percentage"
                autoComplete="CGPA-Percentage"
               />
               
            </Grid>
            <Grid item xs={2}  >
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
            <Grid item xs={6} >
             <h4>Upload your 10th/Equivalent Certificate:</h4>
              
            </Grid>
            <Grid item xs={4}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="CGPA-Percentage"
                label="CGPA/Percentage"
                name="CGPA-Percentage"
                autoComplete="CGPA-Percentage"
               />
               
            </Grid>
            <Grid item xs={2}  >
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
            <Grid item xs={6} >
             <h4>Upload your Experience Letter if any:</h4>
              
            </Grid>
            <Grid item xs={4}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="OrganizationName"
                label="Organization Name"
                name="OrganizationName"
                autoComplete="OrganizationName"
               />
               
            </Grid>
            <Grid item xs={2}  >
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
export default Assessment;
