import React from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";

// Material-UI
import List from "@material-ui/core/List";

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
