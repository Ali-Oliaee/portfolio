import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./utils/mui";
import { BrowserRouter } from "react-router-dom";
import "./utils/i18n";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
