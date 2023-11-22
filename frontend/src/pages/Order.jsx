import React from "react";
import Sidebar from "../components/SidebarA";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";


function Order() {
  return (
    <div>
      <Navbar />
      <Box sx={{ display: "flex" }}>
      </Box>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", paddingLeft: 34 }}
      >
      </Box>
    </div>
  );
}

export default Order;
