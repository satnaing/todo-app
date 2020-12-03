import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      //   maxWidth: 600,
      // backgroundColor: "red",
      // maxHeight: "100vh",
    },
  })
);

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.layout}
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ minHeight: "60vh" }}
    >
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default Layout;
