import React from "react";
import { Router } from "react-router-dom";
import { HvTypography } from "@hv/uikit-react-core";
import { ThemeProvider } from "lib/context/ThemeContext";
import history from "lib/utils/history";
import "lib/i18n";

const App = () => (
  <Router history={history}>
    <ThemeProvider>
      <HvTypography>Map</HvTypography>
    </ThemeProvider>
  </Router>
);

export default App;
