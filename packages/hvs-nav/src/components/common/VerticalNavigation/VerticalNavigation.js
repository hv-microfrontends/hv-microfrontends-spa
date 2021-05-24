import React, { useContext } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { LogOut, User, ThemeSwitcher } from "@hv/uikit-react-icons";
import {
  HvVerticalNavigation,
  HvVerticalNavigationTree,
  HvVerticalNavigationActions,
  HvVerticalNavigationAction,
} from "@hv/uikit-react-core";
import history from "lib/utils/history";
import { NavigationContext } from "lib/context/NavigationContext";
import { ThemeContext } from "lib/context/ThemeContext";
import pages from "lib/api/pages";
import clsx from "clsx";
import useStyles from "./styles";

const VerticalNavigation = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { toggleTheme } = useContext(ThemeContext);
  const { isOpen, toggleOpen, activePage } = useContext(NavigationContext);

  const handleChange = (event, selection) => {
    if (selection.path) {
      history.push(selection.path);
      toggleOpen();
    }
  };

  if (!isOpen || isMdUp) return null;

  return (
    <div className={clsx(classes.root)}>
      <HvVerticalNavigation
        isCollapsable={false}
        isOpen={isOpen}
        toggleOpenCallback={toggleOpen}
        position="fixed"
      >
        <HvVerticalNavigationTree
          data={pages}
          selected={activePage?.id}
          onClick={handleChange}
        />
        {!isMdUp && (
          <HvVerticalNavigationActions>
            <HvVerticalNavigationAction
              label="Toggle Theme"
              icon={<ThemeSwitcher />}
              onClick={() => toggleTheme()}
            />
            <HvVerticalNavigationAction
              label="Profile"
              icon={<User />}
              onClick={() => {}}
            />
            <HvVerticalNavigationAction
              label="Logout"
              icon={<LogOut />}
              onClick={() => console.log("Logout")}
            />
          </HvVerticalNavigationActions>
        )}
      </HvVerticalNavigation>
    </div>
  );
};

export default VerticalNavigation;
