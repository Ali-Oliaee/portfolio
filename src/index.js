import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./utils/mui";
import { BrowserRouter } from "react-router-dom";
import "./utils/i18n";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<h3>loading</h3>}>
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>
);
