import React from "react";
import ListToDo from "./ListToDo";

// Material-UI
import List from "@material-ui/core/List";

export type listObj = {
  id: number;
  text: string;
  checked?: boolean;
};

interface Props {
  lists: listObj[];
  handleDelete: (id: number) => void;
  handleCheck: (id: number) => void;
}

const ToDoList: React.FC<Props> = ({ lists, handleDelete, handleCheck }) => {
  return (
    <>
      <List>
        {lists.map((list) => (
          <ListToDo
            key={list.id}
            list={list}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </List>
    </>
  );
};

export default ToDoList;
