import React, { useEffect, useState } from "react";
import { HvProvider } from "@hv/uikit-react-core";
import { useMediaQuery } from "@material-ui/core";
import { setCookie, getCookie } from "lib/utils/cookie";

export const ThemeContext = React.createContext({
  theme: "wicked",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const initialTheme = getCookie("theme") === "wicked" ? "wicked" : "dawn";
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    setTheme(getCookie("theme") || (prefersDarkMode && "wicked") || "dawn");
  }, [prefersDarkMode]);

  const toggleTheme = () => {
    const newTheme = theme === "dawn" ? "wicked" : "dawn";
    setTheme(newTheme);
    setCookie({ key: "theme", value: newTheme });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <HvProvider uiKitTheme={theme}>{children}</HvProvider>
    </ThemeContext.Provider>
  );
};
