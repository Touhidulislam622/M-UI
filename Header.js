import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box  from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


const Header = () => {
  
  return (
    <Container>
    <Box sx={{ flexGrow: 2 ,  backgroundColor: "ButtonText", }}>
    <AppBar  position="static"   sx={{display:"flex" }}>
      <Toolbar variant="dense" >
        <Typography  variant="h6" color="inherit" component="a">
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  </Container>
  );
}

export default Header