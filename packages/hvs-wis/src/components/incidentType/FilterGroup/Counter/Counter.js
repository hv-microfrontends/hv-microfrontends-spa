import React, { useContext } from "react";
import clsx from "clsx";
import { FilterGroupContext } from "../FilterGroupContext";
import useStyles from "./styles";

const Counter = ({ className, category, total }) => {
  const classes = useStyles();
  const { filterOptions } = useContext(FilterGroupContext);

  const counter = filterOptions.filter((option) =>
    total ? option : option.category === category
  ).length;

  const partial = filterOptions.filter((option) =>
    total ? option.checked : option.category === category && option.checked
  ).length;

  return (
    <div className={clsx(classes.counter, className)}>
      {partial > 0 ? <b>{partial}</b> : partial}
      {` / ${counter}`}
    </div>
  );
};

export default Counter;
