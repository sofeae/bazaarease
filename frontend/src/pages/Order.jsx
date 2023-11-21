import React from "react";
//import Header from "../components/Header";
import Sidebar from "../components/SidebarA";
//import LinearProgress from "../components/LinearProgress";
import { Box } from "@mui/material";
//import SuggestedCourse from "../components/SuggestedCourse";
//import CoursePlan from "../components/CoursePlan"

function Order() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
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
