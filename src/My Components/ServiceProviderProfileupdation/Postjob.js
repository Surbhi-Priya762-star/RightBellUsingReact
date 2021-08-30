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
      

function Postjob() {
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
            <h1 className="heading" style={{margin:'auto'}}>Job Profile Details:</h1>
            </Grid>
           
            <Grid item xs={8}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Role"
                label="Role:"
                name="Role"
                autoComplete="Role"
               />
               </Grid>
           
               <Grid item xs={8}  >
            <FormControl className={classes.formControl} style={{width:'800px'}}>
        <InputLabel id="demo-simple-select-label">Experience Required:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={experience}
          onChange={handleChanged}
        >
           <MenuItem value={1}>Fresher</MenuItem> 
          <MenuItem value={2}>0-6months</MenuItem>
          <MenuItem value={3}>1 year</MenuItem>
          <MenuItem value={4}>2 years</MenuItem>
          <MenuItem value={5}>3 years</MenuItem>
          <MenuItem value={6}>4 years</MenuItem>
          <MenuItem value={7}>5 years</MenuItem>
          <MenuItem value={8}>6 years</MenuItem>
        </Select>
      </FormControl>
               </Grid>
               
               <Grid item xs={8}  >
            <FormControl className={classes.formControl} style={{width:'800px'}}>
        <InputLabel id="demo-simple-select-label">Salary Range:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={salary}
          onChange={handleChanged1}
        >
           <MenuItem value={1}>10k to 20k</MenuItem> 
          <MenuItem value={2}>20k to 30 k</MenuItem>
          <MenuItem value={3}>30k to 40k</MenuItem>
          <MenuItem value={3}>40k to 50k</MenuItem>
          <MenuItem value={3}>50k to above</MenuItem>
         
        </Select>
      </FormControl>
               </Grid>
               <Grid item xs={8}  >
            <FormControl className={classes.formControl} style={{width:'800px'}}>
        <InputLabel id="demo-simple-select-label">Education:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={education}
          onChange={handleChanged2}
        >
           <MenuItem value={1}>Any Graduate</MenuItem> 
          <MenuItem value={2}>B.E./B.Tech</MenuItem>
          <MenuItem value={3}>Post Graduate</MenuItem>
          <MenuItem value={4}>M.tech/M.E.</MenuItem>
          <MenuItem value={5}>M.B.A.</MenuItem>
          <MenuItem value={6}>12th or euivalent</MenuItem>
          <MenuItem value={7}>10th or euivalent</MenuItem>

        </Select>
      </FormControl>
               </Grid>   
              <Grid item xs={12}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Responsibility"
                label="Requirement and Responsibility for this jon in brief:"
                name="Responsibility"
                autoComplete="Responsibility"
               />
               </Grid>
               <Grid item xs={4}  >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Number Of Opening"
                label="Number Of Opening:"
                name="Number Of Opening"
                autoComplete="Number Of Opening"
               />
               </Grid>
               
           
           
            <Grid item xs={8}  >
            
            <FormControl className={classes.formControl} style={{width:'600px'}}>
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
             <h4 style={{fontWeight:'700'}}>Please attach JD for this job Profile in PDF:</h4>
               
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
            style={{marginTop:'90px'}}
          >
            Post This Job
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
export default Postjob;
