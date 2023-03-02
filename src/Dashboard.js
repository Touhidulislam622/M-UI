import * as React from "react";
import { Box, Container } from "@mui/material";
import { Typography, TextField } from "@mui/material";
import {Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

 const Dashboard = () => {
    
  return (
    <Container fixed sx={{
        height: "100vh",
    }}>
      <Box display="flex">
        <Box
          sx={{
            width: 265,
            paddingTop: "10px",
            justifyContent: "flex-start",
            display: 'flex',
          }}
        >
          <TextField  placeholder="Search Item" id="fullWidth"  size="small"  />
          <Button variant="contained" color="primary" endIcon={<SearchIcon />} 
          sx={{
            marginLeft:"5px",
            height:"40px",
            width:"45px"
            }} />
        </Box>
        <Box
          sx={{
            paddingTop: "1rem",
          }}
        >
          <Typography variant="h4" sx={{marginLeft: "8rem"}}>Wellcome back user</Typography>
        </Box>
      </Box> 
        
    </Container>
  );
};

export default Dashboard;
