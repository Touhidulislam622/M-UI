import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";

const ExmpDash = () => {
  return (
    <Grid Container marginTop={2}>
      <Grid item md={8}>
      <Box rowGap={3} columnGap={3} textAlign="center" 
          sx={{
          justifyContent: "right",
          paddingY: 5,
          display: "grid",
          gap: "1",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        <Box boxShadow={3} borderRadius={2}>
          <Box textAlign="end">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Typography variant="h4">4</Typography>
          <Typography variant="h4">Clean</Typography>
          <br /> <br />
          <Divider />
          <Typography variant="body2">Percentage:100%</Typography>
        </Box>
        <Box boxShadow={3} borderRadius={2}>
          <Box textAlign="end">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Typography variant="h4">4</Typography>
          <Typography variant="h4">Clean</Typography>
          <br /> <br />
          <Divider />
          <Typography variant="body2">Percentage:100%</Typography>
        </Box>
        <Box boxShadow={3} borderRadius={2}>
          <Box textAlign="end">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Typography variant="h4">4</Typography>
          <Typography variant="h4">Clean</Typography>
          <br /> <br />
          <Divider />
          <Typography variant="body2">Percentage:100%</Typography>
        </Box>
        <Box boxShadow={3} borderRadius={2}>
          <Box textAlign="end">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Typography variant="h4">4</Typography>
          <Typography variant="h4">Clean</Typography>
          <br /> <br />
          <Divider />
          <Typography variant="body2">Percentage:100%</Typography>
        </Box>
        <Box boxShadow={3} borderRadius={2}>
          <Box textAlign="end">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Typography variant="h4">4</Typography>
          <Typography variant="h4">Clean</Typography>
          <br /> <br />
          <Divider />
          <Typography variant="body2">Percentage:100%</Typography>
        </Box>
        <Box boxShadow={3} borderRadius={2}>
          <Box textAlign="end">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Typography variant="h4">4</Typography>
          <Typography variant="h4">Clean</Typography>
          <br /> <br />
          <Divider />
          <Typography variant="body2">Percentage:100%</Typography>
        </Box>
        <Box boxShadow={3} borderRadius={2}>
          <Box textAlign="end">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Typography variant="h4">4</Typography>
          <Typography variant="h4">Clean</Typography>
          <br /> <br />
          <Divider />
          <Typography variant="body2">Percentage:100%</Typography>
        </Box>
        <Box boxShadow={3} borderRadius={2}>
          <Box textAlign="end">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Typography variant="h4">4</Typography>
          <Typography variant="h4">Clean</Typography>
          <br /> <br />
          <Divider />
          <Typography variant="body2">Percentage:100%</Typography>
        </Box>
      </Box>
      </Grid>
      <Grid item md={8}>
      <Box boxShadow={3} borderRadius={2} sx={{ flexWrap: "nowrap" }}>
          <Box textAlign="end">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Typography variant="h4">4</Typography>
          <Typography variant="h4">Clean</Typography>
          <br /> <br />
          <Divider />
          <Typography variant="body2">Percentage:100%</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExmpDash;
