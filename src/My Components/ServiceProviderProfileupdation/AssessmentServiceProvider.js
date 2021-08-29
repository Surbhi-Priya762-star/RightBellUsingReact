import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import {  useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
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
    const classes = useStyles();
    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

 
    
  const [age, setAge] = React.useState('');

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
          <form className={classes.form} noValidate>
          <Grid container spacing={5}>
          <Grid item xs={12} >
            <h1 className="heading" style={{margin:'auto'}}>Please Update Few things about Company:</h1>
            </Grid>
           
            <Grid item xs={8}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="WebsiteLink"
                label="Company's Website link"
                name="WebsiteLink"
                autoComplete="WebsiteLink"
               />
               </Grid>
           
            <Grid item xs={8} >
             
              <TextField
                variant="outlined"
                required
                fullWidth
                id="HeadQuarter"
                label="HeadQuarter"
                name="HeadQuarter"
                autoComplete="HeadQuarter"
               />
               </Grid>
           
           
            <Grid item xs={8}  >
            
            <FormControl className={classes.formControl} style={{width:'800px'}}>
            <InputLabel id="demo-mutiple-chip-label">Office Location:</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
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
            <FormControl className={classes.formControl} style={{width:'800px'}}>
        <InputLabel id="demo-simple-select-label">Company's Type:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChanged}
        >
          <MenuItem value={10}>Government</MenuItem>
          <MenuItem value={20}>Private</MenuItem>
          <MenuItem value={30}>Public Sector</MenuItem>
        </Select>
      </FormControl>
               </Grid>
               <Grid item xs={8} >
             <h4 style={{fontWeight:'700'}}>Upload these Documents for verification:</h4>
              </Grid>  
     <Grid item xs={8}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="ITRDocument"
                label="ITR Document"
                name="ITRDocument"
                autoComplete="ITRDocument"
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
          
            <Grid item xs={8}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="GST Document"
                label="GST Document"
                name="GST Document"
                autoComplete="GST Document"
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
           
        </div>
    )
}
export default Assessment;
