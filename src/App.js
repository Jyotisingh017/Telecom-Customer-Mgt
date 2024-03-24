import React from "react";
import { Box } from "@mui/material";
//import {BrowserRouter} from 'react-router-dom';
import Routes from "./routes";
import "./App.css";
function App() {
  //add errorboundary heres
  return (
    <Box className="App-header">
      <Routes />
    </Box>
  );
}

export default App;
