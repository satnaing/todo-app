import React from "react";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { Divider, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "10px",
      outline: "none",
    },
  },
  cardParent: {
    background: "transparent",
    position: "relative",
    margin: "2rem auto",
  },
  cardChildren: {
    maxHeight: "12rem",
    overflow: "auto",
  },
  addItemCard: {
    backgroundColor: theme.palette.primary.main,
    width: "100vh",
    [theme.breakpoints.down("sm")]: {
      width: "60vh",
    },
    [theme.breakpoints.down("xs")]: {
      width: "40vh",
    },
  },
  addItemAvatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    height: theme.spacing(12),
    width: theme.spacing(10),
    position: "absolute",
    top: "-3rem",
    left: "3rem",
    [theme.breakpoints.down("xs")]: {
      left: "1rem",
    },
  },
  dividerRoot: {
    backgroundColor: theme.palette.common.white,
    opacity: 0.2,
  },
  headerText: {
    marginLeft: "8rem",
    fontSize: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "6rem",
    },
  },
}));

interface Props {
  icon: any;
  headText: string;
  children: React.ReactNode;
}

const CardContainer: React.FC<Props> = ({ icon, headText, children }) => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.cardParent}>
      <Avatar variant="rounded" className={classes.addItemAvatar}>
        {icon === "add" ? (
          <AssignmentIcon style={{ fontSize: 64 }} />
        ) : (
          <AssignmentTurnedInIcon style={{ fontSize: 64 }} />
        )}
      </Avatar>
      <Card className={classes.addItemCard}>
        <CardContent>
          <Typography
            component="h6"
            variant="h6"
            className={classes.headerText}
            color="secondary"
          >
            {headText}
          </Typography>
        </CardContent>
        <Divider variant="middle" classes={{ root: classes.dividerRoot }} />
        <CardContent>
          <div className={classes.cardChildren}>{children}</div>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default CardContainer;
