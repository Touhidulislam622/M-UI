import React from "react";
import { Container, Typography, Box , Paper , Button } from "@mui/material";

const DataTable = () => {

  const serviceList = ["service 1", "service 2 ", "service 3", "service 4" ,"service 5","service 6","service 7","service 8"];
  const demoItem = ["demo 1 ", "demo 2 "];

  return (
    <Container sx={{display:"contents"}}>
      
      <Typography
        variant="h2"
        sx={{ my: 4, textAlign: "center", color: "warning.main" }}>This is Header Profile</Typography>

        {
          demoItem.map((demo) => (<Box>
            <Paper elevation={6}>
              <Box sx={{borderTop: 50 , borderColor: 'divider' , p:"4rem" , m: 3, borderBottom: 50 , borderBottomColor: 'divider' , borderLeft:10 , borderLeftColor:"divider", borderRight:10 , borderRightColor:"divider"}}>
                <Typography variant="h3">Touhid</Typography>
                <Typography variant="h4">Islam</Typography>
                <Typography variant="h6">Piash</Typography>
              </Box>
              <Box sx={{textAlign:"center" ,  borderColor: 'primary' }}>
                <Typography >Rakibur</Typography>
                <Typography >Rahman</Typography>
                <Typography >RaF</Typography>
              </Box>
              <Box sx={{textAlign:"end" , p:"4rem" , m:3 , borderBottom: 50,  borderColor: 'divider'  }}>
                <Typography variant="subtitle2">Sojeeb</Typography>
                <Typography variant="h2">Islam</Typography>
                <Typography variant="Body2">Bandari</Typography>
              </Box>
            </Paper>
          </Box>))
        }

      <Typography variant="h2" sx= {{mb:"5rem" , textAlign:"center" }}> overview with flex </Typography>
          <Box sx={{display:"flex" , flexDirection:{xs:"column" , sm:"row"}}}>
          { serviceList.map((service) => (
        <Paper elevation={9} sx={{width:{xs:1 , md:320 }}}>
          <Typography variant="h4" sx={{m:.1 , p:.1 }}>{service}</Typography>
          <Typography sx={{m:2}}>
            Lorem ipsum dolor, sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quidem eius nisi molestias, explicabo sed perferendis corporis impedit repellat natus? amet consectetur adipisicing elit. Earum iste
            quod
            facilis quis incidunt eos.zzz
          </Typography>

          <Button variant="contained" size="small" color="secondary" sx={{m:1, p:0.5}}>learn more</Button>

        </Paper>
      ))
      }
          </Box>
    </Container>
  );
};

export default DataTable;
