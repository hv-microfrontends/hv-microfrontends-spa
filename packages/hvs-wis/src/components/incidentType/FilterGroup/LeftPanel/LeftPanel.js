import React, { useContext } from "react";
import { HvPanel, HvListContainer, HvListItem } from "@hv/uikit-react-core";
import { FilterGroupContext } from "../FilterGroupContext";
import Counter from "../Counter";
import useStyles from "./styles";

const LeftPanel = ({ activeCategory, onChange }) => {
  const classes = useStyles();
  const { filters } = useContext(FilterGroupContext);

  return (
    <HvPanel
      classes={{
        root: classes.root,
      }}
    >
      <HvListContainer condensed interactive>
        {filters.map((category) => (
          <HvListItem
            key={category.name}
            onClick={() => onChange(category)}
            selected={activeCategory.name === category.name}
            endAdornment={<Counter category={category.name} />}
          >
            {category.name}
          </HvListItem>
        ))}
      </HvListContainer>
    </HvPanel>
  );
};

export default LeftPanel;
