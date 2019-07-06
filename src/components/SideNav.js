import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Card } from 'react-bootstrap';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SideNav = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    admin: '',
    hod: '',
    facilitator: '',
    learner: '',
    technician: '',
    name: 'hai',
  });
  function handleChange1(event) {
    console.log("handle change 1");
    console.log(event.target.value);
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    if(event.target.value === 20){
      
    }
  }
  function handleChange2(event) {
    console.log("handle change 2")
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  function handleChange3(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  function handleChange4(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  function handleChange5(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  return(
    <Card style={{ width: '18rem',marginLeft: '-25%', height: 'auto' }}>
    <Card.Body>
      <Card.Title>Select a Role</Card.Title>
      <Card.Text>
        Please select a Role and select an option from the dropdown
      </Card.Text>
      <form className={classes.root} autoComplete="off">
    <FormControl className={classes.formControl}>
    <InputLabel htmlFor="age-simple" style={{marginTop:'0px'}}>Admin</InputLabel>
    <Select
    value={values.admin}
    onChange={handleChange1}
    inputProps={{
     name: 'admin',
     id: 'admin',
    }}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    </FormControl>
    <FormControl className={classes.formControl}>
    <InputLabel htmlFor="age-simple" style={{marginTop:'0px'}}>HOD</InputLabel>
    <Select
    value={values.hod}
    onChange={handleChange2}
    inputProps={{
     name: 'hod',
     id: 'hod',
    }}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    </FormControl>
    <FormControl className={classes.formControl}>
    <InputLabel htmlFor="age-simple" style={{marginTop:'0px'}}>Facilitator</InputLabel>
    <Select
    value={values.facilitator}
    onChange={handleChange3}
    inputProps={{
     name: 'facilitator',
     id: 'facilitator',
    }}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    </FormControl>
    <FormControl className={classes.formControl}>
    <InputLabel htmlFor="age-simple" style={{marginTop:'0px'}}>Learner</InputLabel>
    <Select
    value={values.learner}
    onChange={handleChange4}
    inputProps={{
     name: 'learner',
     id: 'learner',
    }}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    </FormControl>
    <FormControl className={classes.formControl}>
    <InputLabel htmlFor="age-simple" style={{marginTop:'0px'}}>Technician</InputLabel>
    <Select
    value={values.technician}
    onChange={handleChange5}
    inputProps={{
     name: 'technician',
     id: 'technician',
    }}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    </FormControl>
    </form>

    </Card.Body>
    </Card>
  )

}
export default SideNav;
