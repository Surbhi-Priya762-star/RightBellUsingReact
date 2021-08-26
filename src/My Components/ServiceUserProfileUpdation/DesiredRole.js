import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    formControl: {
        margin: theme.spacing(3),
        width:'400px',
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },

      chip: {
        margin: 2,
      },

      noLabel: {
        marginTop: theme.spacing(3),
      },

    submit: {
      width:'30%',
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
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



function DesiredRole() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [role, setRole] = React.useState('');

               const handledChange = (event) => {
                setRole(event.target.value);
                 };
  
                     const handleChange = (event) => {
                      setPersonName(event.target.value);
                 setAge(event.target.value);
                     };
                      const  handleChanged = (event) => {
                        setAge(event.target.value);
                                    };
     /* const handleChangeMultiple = (event) => {
      const { options } = event.target;
      const value = [];
      for (let i = 0, l = options.length; i < l; i += 1) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      setPersonName(value);
    }; */

    

   
    return (
        <div>
            <Header/>
            <h1 className="heading">Desired Job Role:</h1>
    <Container className="Main-content" >
    <div className={classes.root}>
      <Grid container spacing={3}>
        
       
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          <form className={classes.form} noValidate>
          <Grid container spacing={5}>
            <Grid item xs={12} >
             <h4>This Information will help the Employer to Know about your Desired Job Profile/Criteria</h4>
              
            </Grid>
            <Grid item xs={12} sm={6} >
            <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Functional Area</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChanged}
        >
          <MenuItem value={10}>IT-Software</MenuItem>
          <MenuItem value={20}>Banking/Insurance</MenuItem>
          <MenuItem value={30}>Business Intelligence/ Analytics</MenuItem>
          <MenuItem value={40}>Accounts/Finance</MenuItem>
        </Select>
      </FormControl>
               
            </Grid>
            <Grid item xs={12} sm={6}  >
            <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
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
           
            <Grid item xs={12}sm={6} >
            
            <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Desired Job Type:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          onChange={handledChange}
        >
          <MenuItem value={1}>Permanent</MenuItem>
          <MenuItem value={2}>Contractual</MenuItem>
     
        </Select>
      </FormControl>
            </Grid>
          
           <Grid item xs={12} sm={6} >
           <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChanged}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
             </Grid> 
             <Grid item xs={12} sm={6} >
           <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChanged}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
             </Grid>
             <Grid item xs={12} sm={6}  >
             <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
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
export default DesiredRole;
