import React from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";

// Material-UI
import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

export type listObj = {
  id: number;
  text: string;
  checked?: boolean;
};

interface Props {
  lists: listObj[];
}

const ToDoLists: React.FC<Props> = ({ lists }) => {
  return (
    // <ul>
    //   {lists.map((list) => (
    //     <ListItem key={list.id} list={list} />
    //   ))}
    // </ul>
    <List>
      {lists.map((list) => (
        <ListItem key={list.id} list={list} />
      ))}
    </List>
  );
};

const mapStateToProps = (state: any) => {
  return { lists: state.lists };
};

export default connect(mapStateToProps)(ToDoLists);
