import React, { useContext } from "react";
import { Filters } from "@hv/uikit-react-icons";
import { HvBaseDropdown, HvTypography, HvButton } from "@hv/uikit-react-core";
import { FilterGroupProvider, FilterGroupContext } from "./FilterGroupContext";
import { clearOptions } from "./utils";
import ActionPanel from "./ActionPanel";
import FilterContent from "./FilterContent";
import Counter from "./Counter";
import useStyles from "./styles";

const Header = () => {
  return (
    <>
      <Filters />
      <HvTypography>Filters</HvTypography>
    </>
  );
};

const Actions = ({ onDone }) => {
  const classes = useStyles();
  const { filterOptions, setFilterOptions } = useContext(FilterGroupContext);

  const onClearHandler = (evt) => {
    const options = clearOptions(filterOptions);
    setFilterOptions(options);
  };

  const onDoneHandler = (evt) => {
    const options = filterOptions.filter((option) => option.checked);
    console.log("options: ", options);
    onDone?.(options);
  };

  return (
    <>
      <HvButton category="ghost" onClick={onClearHandler}>
        Clear Filters
      </HvButton>
      <div aria-hidden="true" className={classes.space}>
        &nbsp;
      </div>
      <HvButton category="ghost" onClick={onDoneHandler}>
        Done
      </HvButton>
    </>
  );
};

const FilterGroup = ({ filters = [], onChange }) => {
  const { dropdownPanel } = useStyles();

  return (
    <FilterGroupProvider filters={filters}>
      <HvBaseDropdown
        variableWidth
        placement="left"
        placeholder={<Header />}
        classes={{
          panel: dropdownPanel,
        }}
        adornment={<Counter total />}
      >
        <ActionPanel actions={<Actions onDone={onChange} />}>
          <FilterContent />
        </ActionPanel>
      </HvBaseDropdown>
    </FilterGroupProvider>
  );
};

export default FilterGroup;
