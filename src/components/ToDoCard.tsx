import React from "react";
import AddList from "./AddList";
import ToDoLists from "./ToDoLists";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
      // width: 500,
      // height: 250,
      // maxHeight: 800,
      // overflowY: "auto",
    },
  })
);

const ToDoCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* <CardHeader title="ToDo List" /> */}
      <CardContent>
        <Typography align="center" variant="h5" component="h2">
          To-Do List
        </Typography>

        <CardActions>
          <AddList />
        </CardActions>
        <ToDoLists />
      </CardContent>
    </Card>
  );
};

export default ToDoCard;
