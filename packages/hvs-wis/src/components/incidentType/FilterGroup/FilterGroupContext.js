import React, { useEffect, useState } from "react";
import { flattenOptions } from "./utils";

export const FilterGroupContext = React.createContext({
  filterOptions: [],
  setFilterOptions: () => {},
});

export const FilterGroupProvider = ({ filters, children }) => {
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    setFilterOptions(flattenOptions(filters));
  }, [filters]);

  return (
    <FilterGroupContext.Provider
      value={{ filters, filterOptions, setFilterOptions }}
    >
      {children}
    </FilterGroupContext.Provider>
  );
};
