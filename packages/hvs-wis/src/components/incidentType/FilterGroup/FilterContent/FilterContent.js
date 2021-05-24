import React, { useState, useEffect, useContext } from "react";
import { getActiveCategory, getActiveOptions, updateOptions } from "../utils";
import { FilterGroupContext } from "../FilterGroupContext";
import LeftPanel from "../LeftPanel";
import RightPanel from "../RightPanel";
import useStyles from "./styles";

const FilterContent = () => {
  const classes = useStyles();
  const { filters, filterOptions, setFilterOptions } =
    useContext(FilterGroupContext);
  const [activeCategory, setActiveCategory] = useState([]);
  const [activeOptions, setActiveOptions] = useState([]);

  useEffect(() => {
    setActiveCategory(getActiveCategory(filters));
  }, [filters]);

  useEffect(() => {
    const options = getActiveOptions(filterOptions, activeCategory);
    setActiveOptions(options);
  }, [filterOptions, activeCategory]);

  const onCategoryChangeHandler = (selectedCategory) => {
    const category = getActiveCategory(filters, selectedCategory);
    setActiveCategory(category);
  };

  const onOptionsChangeHandler = (selection) => {
    const options = updateOptions(filterOptions, selection, activeCategory);
    setFilterOptions(options);
  };

  return (
    <div className={classes.root}>
      <LeftPanel
        activeCategory={activeCategory}
        onChange={onCategoryChangeHandler}
        filters={filters}
      />
      <RightPanel
        options={activeOptions}
        onOptionsChange={onOptionsChangeHandler}
      />
    </div>
  );
};

export default FilterContent;
