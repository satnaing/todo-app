import React, { useState } from "react";
import { listObj } from "./ToDoLists";
import { connect } from "react-redux";
import { deleteList, toggleChecked } from "../redux/actions/toDoList.actions";

import "./to-do-list.css";

interface Props {
  list: listObj;
  toggleChecked: (id: number) => any;
  deleteList: (id: number) => any;
}

const ListItem: React.FC<Props> = ({ list, toggleChecked, deleteList }) => {
  const [isChecked, setIsChecked] = useState(list.checked);

  const handleCheck = (id: number) => {
    toggleChecked(id);
    setIsChecked(!isChecked);
  };

  const handleDelete = (id: number) => {
    deleteList(id);
  };

  return (
    <li>
      <input
        type="checkbox"
        onChange={() => handleCheck(list.id)}
        defaultChecked={list.checked ? true : false}
      />
      <span className={isChecked ? "checked" : ""}>{list.text}</span>
      <button onClick={() => handleDelete(list.id)}>Delete</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleChecked: (id: number) => dispatch(toggleChecked(id)),
  deleteList: (id: number) => dispatch(deleteList(id)),
});

export default connect(null, mapDispatchToProps)(ListItem);
