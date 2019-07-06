import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

var style = {
  marginLeft:'45%'
};
const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
            <Toolbar>
            <Typography variant="h5" color="inherit" style={style}>
                Admin Portal
            </Typography>
            </Toolbar>
            </AppBar>
            </div>
    )

}
export default NavBar;
