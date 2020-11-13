import React from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";

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
    <ul>
      {lists.map((list) => (
        <ListItem key={list.id} list={list} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state: any) => {
  return { lists: state.lists };
};

export default connect(mapStateToProps)(ToDoLists);
