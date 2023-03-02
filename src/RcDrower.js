import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 80 

const RcDrower = () => {
    return (
        <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer color="primary" 
          sx={{
            width: drawerWidth,
            flexShrink:0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing:"content-box",
            },
          }}
          variant="permanent"
          anchor="left"
          
        >
          <Toolbar />
          <Divider />
          
          <List sx={{spacing:20, }}>
            {["", "", "", ""].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
  
          <Divider />
        </Drawer>
      </Box>
    );
};

export default RcDrower;