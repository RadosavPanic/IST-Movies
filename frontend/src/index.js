import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import App from "./App";
import "./index.scss";

import { MoviesProvider } from "../src/contexts/movies-context/movies.context";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesProvider>
        <CssBaseline />
        <App />
      </MoviesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
