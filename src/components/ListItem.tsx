import React, { useState } from "react";
import { listObj } from "./ToDoLists";
import { connect } from "react-redux";
import { toggleChecked } from "../redux/actions/toDoList.actions";

import "./to-do-list.css";

interface Props {
  list: listObj;
  toggleChecked: (id: number) => any;
}

const ListItem: React.FC<Props> = ({ list, toggleChecked }) => {
  const [isChecked, setIsChecked] = useState(list.checked);

  const handleCheck = (id: number) => {
    toggleChecked(id);
    setIsChecked(!isChecked);
  };

  return (
    <li>
      <input
        type="checkbox"
        onChange={() => handleCheck(list.id)}
        defaultChecked={list.checked ? true : false}
      />
      <span className={isChecked ? "checked" : ""}>{list.text}</span>
      <button
      // onClick={() => handleDelete(list.id)}
      >
        Delete
      </button>
    </li>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleChecked: (id: number) => dispatch(toggleChecked(id)),
});

export default connect(null, mapDispatchToProps)(ListItem);
