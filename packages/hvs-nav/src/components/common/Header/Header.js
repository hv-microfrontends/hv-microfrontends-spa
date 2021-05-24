import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useTheme } from "@material-ui/core";
import {
  HvHeader,
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation,
  HvButton,
} from "@hv/uikit-react-core";
import { Menu, ThemeSwitcher, User } from "@hv/uikit-react-icons";
import HitachiLogo from "assets/HitachiLogo";
import { ThemeContext } from "lib/context/ThemeContext";
import { NavigationContext } from "lib/context/NavigationContext";
import pages from "lib/api/pages";
import history from "lib/utils/history";

const Header = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleOpen, activePage } = useContext(NavigationContext);
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const handleChange = (event, selection) => {
    if (selection.path) history.push(selection.path);
  };

  return pages ? (
    <HvHeader>
      {!isMdUp && (
        <div>
          <HvButton category="ghost" icon onClick={toggleOpen}>
            <Menu />
          </HvButton>
        </div>
      )}

      <HvHeaderBrand
        logo={<HitachiLogo style={{ width: 72, height: 20 }} />}
        name={!isXs ? t("components.common.header.appName") : undefined}
      />

      {isMdUp && (
        <HvHeaderNavigation
          data={pages}
          selected={activePage?.id}
          onClick={handleChange}
        />
      )}
      {isMdUp && (
        <HvHeaderActions>
          <HvButton
            icon
            aria-label="Change theme"
            onClick={() => toggleTheme()}
          >
            <ThemeSwitcher />
          </HvButton>
          <HvButton icon aria-label="Open User panel">
            <User />
          </HvButton>
        </HvHeaderActions>
      )}
    </HvHeader>
  ) : null;
};

export default Header;
