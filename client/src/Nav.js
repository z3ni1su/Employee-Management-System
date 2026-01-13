import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';


function Nav() {
  const style = {padding:'25px' ,  fontFamily:  'Courier New, monospace',color: 'white',backgroundColor: 'black'}
  const button = {color: 'white', padding:'0px 100px', fontSize:'24px' , fontFamily:  'Courier New, monospace'}
   return (
    <AppBar  position="static" style={style}>
      <div >
        <Typography variant="h3" style={style} sx={{ color: 'antiquewhite'  }}>
          EMPLOYEE MANAGEMENT SYSTEM
        </Typography>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Button className="my-button" component={Link} to="/" style={button}>
             Home
          </Button>
          <Button className="my-button" component={Link} to="/create" style={button}>
             Create 
          </Button>
          <Button  className="my-button" component={Link} to="/directory" style={button}>
             Directory 
          </Button>
          <Button  className="my-button" component={Link} to="/retirement" style={button}>
             Upcoming Retirement 
          </Button>
      </Toolbar>
      </div>
    </AppBar>
  );
};
export default Nav;
