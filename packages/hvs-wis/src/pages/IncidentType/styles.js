import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  incidentName: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    cursor: "pointer",
    position: "relative",
    left: "-12px",
  },
  incidentNameIcon: {
    position: "relative",
    float: "left",
    left: "-22px",
  },
}));
export default styles;
