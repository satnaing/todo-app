import React from "react";
import { listObj } from "./ToDoLists";

import "./to-do-list.css";

interface Props {
  list: listObj;
}

const ListItem: React.FC<Props> = ({ list }) => {
  return (
    <li>
      <input
        type="checkbox"
        // onClick={() => handleCheck(list.id)}
        // checked={list.checked ? true : false}
      />
      <span className={list.checked ? "checked" : ""}>{list.text}</span>
      <button
      // onClick={() => handleDelete(list.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ListItem;
