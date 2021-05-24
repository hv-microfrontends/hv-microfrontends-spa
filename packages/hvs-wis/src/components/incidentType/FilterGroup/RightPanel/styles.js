import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    flex: "50%",
  },
  search: {
    marginBottom: theme.hvSpacing("xs"),
  },
  checkboxGroup: {
    width: "100%",
    height: 200,
    overflowY: "scroll",
  },
  hiddenOption: {
    display: "none",
  },
}));

export default styles;
