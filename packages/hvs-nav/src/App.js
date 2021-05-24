import React from "react";
import { Router } from "react-router-dom";
import { Header } from "components/common";
import { ThemeProvider } from "lib/context/ThemeContext";
import history from "lib/utils/history";
import "lib/i18n";

const App = () => (
  <Router history={history}>
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  </Router>
);

export default App;
