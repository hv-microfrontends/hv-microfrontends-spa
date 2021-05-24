import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  counter: {
    height: "100%",
    lineHeight: "32px",
    marginRight: 10,
    position: "absolute",
    pointerEvents: "none",
    top: -1,
    right: -1,
  },
}));

export default styles;
