import React from "react";
import CardContainer from "./CardContainer";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Divider, ListItem, Paper } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";

import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
// import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import EditIcon from "@material-ui/icons/Edit";

import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: theme.palette.common.black },
  bg: {
    backgroundImage: "url('/Wave2.svg')",
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

  // INput
  textInput: {
    "& label": {
      color: theme.palette.common.white,
    },
  },
}));

const Layout: React.FC = ({ children }) => {
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
            {/* ADD CARD */}
            <FormControl style={{ width: "100%" }}>
              <Grid container>
                <Grid item sm={10}>
                  <TextField
                    id="standard-start-adornment"
                    label="What do you want to do?"
                    color="secondary"
                    fullWidth
                    classes={{ root: classes.textInput }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item sm={2} style={{ textAlign: "center" }}>
                  <IconButton aria-label="add">
                    <Icon color="secondary" style={{ fontSize: "3rem" }}>
                      add_circle
                    </Icon>
                  </IconButton>
                </Grid>
              </Grid>
            </FormControl>
          </CardContainer>
        </Grid>
        <Grid item>
          <CardContainer icon="" headText="TO-DO LIST">
            <List>
              <ListItem>
                <Checkbox
                  edge="start"
                  // checked={}
                  tabIndex={-1}
                  disableRipple
                  style={{ color: "#FFD369" }}
                />
                <ListItemText
                  style={{ color: "#EEEEEE" }}
                  primary="Single-line item"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon style={{ color: "#FFD369" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem>
                <Checkbox
                  edge="start"
                  // checked={}
                  tabIndex={-1}
                  disableRipple
                  style={{ color: "#FFD369" }}
                />
                {/* <form noValidate autoComplete="off"> */}
                <Input
                  style={{
                    color: "#EEEEEE",
                    borderColor: "#EEEEEE",
                    width: "100%",
                  }}
                  color="secondary"
                  fullWidth
                  defaultValue="Hello world"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon style={{ color: "#FFD369" }} />
                  </IconButton>
                </ListItemSecondaryAction>
                {/* </form> */}
              </ListItem>

              {/* <ListItem>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    // checked={}
                    tabIndex={-1}
                    disableRipple
                    style={{ color: "#FFD369" }}
                  />
                </ListItemIcon>
                <ListItemText
                  style={{ color: "#EEEEEE" }}
                  primary="Single-line item"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon style={{ color: "#FFD369" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    // checked={}
                    tabIndex={-1}
                    disableRipple
                    style={{ color: "#FFD369" }}
                  />
                </ListItemIcon>
                <ListItemText
                  style={{ color: "#EEEEEE" }}
                  primary="Single-line item"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon style={{ color: "#FFD369" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    // checked={}
                    tabIndex={-1}
                    disableRipple
                    style={{ color: "#FFD369" }}
                  />
                </ListItemIcon>
                <ListItemText
                  style={{ color: "#EEEEEE" }}
                  primary="Single-line item"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon style={{ color: "#FFD369" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    // checked={}
                    tabIndex={-1}
                    disableRipple
                    style={{ color: "#FFD369" }}
                  />
                </ListItemIcon>
                <ListItemText
                  style={{ color: "#EEEEEE" }}
                  primary="Single-line item"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon style={{ color: "#FFD369" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    // checked={}
                    tabIndex={-1}
                    disableRipple
                    style={{ color: "#FFD369" }}
                  />
                </ListItemIcon>
                <ListItemText
                  style={{ color: "#EEEEEE" }}
                  primary="Single-line item"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon style={{ color: "#FFD369" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    // checked={}
                    tabIndex={-1}
                    disableRipple
                    style={{ color: "#FFD369" }}
                  />
                </ListItemIcon>
                <ListItemText
                  style={{ color: "#EEEEEE" }}
                  primary="Single-line item"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon style={{ color: "#FFD369" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    // checked={}
                    tabIndex={-1}
                    disableRipple
                    style={{ color: "#FFD369" }}
                  />
                </ListItemIcon>
                <ListItemText
                  style={{ color: "#EEEEEE" }}
                  primary="Single-line item"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon style={{ color: "#FFD369" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem> */}
            </List>
          </CardContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
