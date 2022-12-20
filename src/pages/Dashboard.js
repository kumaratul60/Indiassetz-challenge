import React from "react";
import { Box } from "@mui/material";

import { AreaChart, CalendarCmp, Cards, Header, Insights } from "../components";


function Dashboard() {
  return (
    <Box sx={ { width: "100%", p: 4 } }>
      <Header />
      <Insights />
      <Cards />
      <Box
        sx={ {
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        } }
      >
        <Box sx={ { width: "68%" } }>
          <AreaChart />
        </Box>
        <Box sx={ { width: "28%", height: "100%" } }>
          <CalendarCmp />
        </Box>
      </Box>
    </Box>
  );
}
export default Dashboard
