import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import AddProperty from "./pages/AddProperty";
import {MiniDrawer} from "./components";


function App() {
  return (
    <BrowserRouter>
      <Box sx={ { display: "flex" } }>
        <MiniDrawer />
        <Routes>
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route
            path="/dashboard/add-property"
            element={ <AddProperty /> }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
