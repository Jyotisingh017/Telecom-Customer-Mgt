import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { UserDetailContext } from "./contexts/UserDetailContext";
import reportWebVitals from "./reportWebVitals";

//add error boundary later
//const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserDetailContext.Provider value={{name:'Mac', plan: 'Platinum365', renewDte:'24/04/2024', status:'Active'}}>
      <App />
      </UserDetailContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
