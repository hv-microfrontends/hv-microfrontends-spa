import React from "react";
import { HvActionBar } from "@hv/uikit-react-core";
import useStyles from "./styles";

const ActionPanel = ({ actions, children }) => {
  const { root } = useStyles();

  return (
    <div className={root}>
      {children}
      <HvActionBar>{actions}</HvActionBar>
    </div>
  );
};

export default ActionPanel;
