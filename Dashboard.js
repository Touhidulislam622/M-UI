import * as React from "react";
import { Box, Container } from "@mui/material";
import { Typography, TextField } from "@mui/material";
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Dashboard = () => {
    
  return (
    <Container fixed sx={{
      justifyContent: 'center',
        paddingTop: "5px",

    }}>
      <Box display="flex">
        <Box
          sx={{
            // width: 265,
            justifyContent: "flex-start",
            display: 'flex',
          }}
        >
          <TextField  placeholder="Search Item" id="fullWidth"  size="small"  />
          <Button variant="contained" color="primary" endIcon={<SearchIcon />} 
          sx={{
            marginLeft:"5px",
            height:"40px",
            // width:"45px"
            }} />
        </Box>
        <Box >
          <Typography variant="h5" sx={{marginLeft: "12rem" , color:"gray.light"}}>Wellcome back user</Typography>
        </Box>
      </Box> 
       
    </Container>
  );
};

export default Dashboard;