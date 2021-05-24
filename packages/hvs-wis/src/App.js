import React from "react";
import { Router } from "react-router-dom";
import IncidentType from "pages/IncidentType";
import { ThemeProvider } from "lib/context/ThemeContext";
import history from "lib/utils/history";
import "lib/i18n";

const App = () => (
  <Router history={history}>
    <ThemeProvider>
      <IncidentType />
    </ThemeProvider>
  </Router>
);

export default App;
