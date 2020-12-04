import React from "react";
import AddList from "../components/AddList";
import ToDoLists from "../components/ToDoLists";

// Material-UI
import CardContainer from "./CardContainer";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: theme.palette.common.black },
  bg: {
    backgroundImage: "url('todo-app/Wave2.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    backgroundColor: theme.palette.common.black,
    transform: "rotate(180deg)",
    position: "absolute",
    zIndex: 0,
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "right",
    },
  },
  header: {
    marginTop: "3rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
    marginBottom: "3rem",
    zIndex: 1,
  },
  todoapp: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    width: "14rem",
    textAlign: "center",
    paddingTop: "0.35em",
  },
}));

const Layout: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bg}></div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        // spacing={5}
      >
        <Grid item className={classes.header}>
          <Card className={classes.todoapp}>
            <Typography gutterBottom variant="h5" component="h2">
              To-Do App
            </Typography>
          </Card>
        </Grid>
        <Grid item>
          <CardContainer icon="add" headText="ADD ITEM">
            <AddList />
          </CardContainer>
        </Grid>
        <Grid item>
          <CardContainer icon="" headText="TO-DO LIST">
            <ToDoLists />
          </CardContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
