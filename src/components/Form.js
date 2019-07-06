import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';

const Form = () => {

    return(
      <span>
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh',marginTop:'-52.5%' }} />
      <h2 style={{marginTop:'-70%',marginLeft:'35%'}}>Already a member?</h2>
      <Button variant="contained" color="primary" style={{marginLeft:'45%'}}>
        Sign In
      </Button>
      <h2 style={{marginTop:'10%',marginLeft:'35%'}}>Don't have an account?</h2>
      <Button variant="contained" color="primary" style={{marginLeft:'45%'}}>
        Register
      </Button>
      </Container>
      </span>

    )
}
export default Form;
