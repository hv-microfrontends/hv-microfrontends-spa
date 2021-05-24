import React, { useMemo, useEffect, useState } from "react";
import clsx from "clsx";
import {
  HvInput,
  HvPanel,
  HvButton,
  HvCheckBoxGroup,
  HvCheckBox,
} from "@hv/uikit-react-core";
import ActionPanel from "../ActionPanel";
import { getValues } from "../utils";
import useStyles from "./styles";

const Actions = ({ onApply, onCancel }) => {
  return (
    <>
      <HvButton category="ghost" onClick={onApply}>
        Apply
      </HvButton>
      <HvButton category="ghost" onClick={onCancel}>
        Cancel
      </HvButton>
    </>
  );
};

const RightPanel = ({ options, onOptionsChange }) => {
  const classes = useStyles();
  const [tmpValues, setTmpValues] = useState([]);
  const [intValues, setIntValues] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    const values = getValues(options);
    setTmpValues(values);
    setIntValues(values);
  }, [options]);

  const onChangeHandler = (evt, values) => {
    setIntValues(values);
  };

  const onApplyHandler = (evt) => {
    setTmpValues(intValues);
    onOptionsChange?.(intValues);
  };

  const onCancelHandler = (evt) => {
    setIntValues(tmpValues);
  };

  const searchedOptions = useMemo(() => {
    return options
      ? options.map((option) => ({
          ...option,
          hidden:
            option.name.toLowerCase().indexOf(searchStr.toLowerCase()) < 0,
        }))
      : null;
  }, [options, searchStr]);

  return (
    <div className={classes.root}>
      <ActionPanel
        actions={
          <Actions onApply={onApplyHandler} onCancel={onCancelHandler} />
        }
      >
        <HvPanel>
          <HvInput
            classes={{
              root: classes.search,
            }}
            type="search"
            placeholder="Search"
            value={searchStr}
            onChange={(event, str) => setSearchStr(str)}
          />
          <HvCheckBoxGroup
            className={classes.checkboxGroup}
            showSelectAll
            onChange={onChangeHandler}
            value={intValues}
          >
            {searchedOptions.map((option) => (
              <HvCheckBox
                className={clsx({
                  [classes.hiddenOption]: option.hidden,
                })}
                key={option.id}
                label={option.name}
                value={option.name}
              />
            ))}
          </HvCheckBoxGroup>
        </HvPanel>
      </ActionPanel>
    </div>
  );
};

export default RightPanel;
