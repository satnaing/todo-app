import React, { useState, useEffect, useRef } from "react";
import { listObj } from "./ToDoLists";
import { connect } from "react-redux";
import {
  deleteList,
  editList,
  toggleChecked,
} from "../redux/actions/toDoList.actions";

import "./to-do-list.css";

interface Props {
  list: listObj;
  toggleChecked: (id: number) => any;
  deleteList: (id: number) => any;
  editList: (id: number, text: any) => any;
}

const ListItem: React.FC<Props> = ({
  list,
  toggleChecked,
  deleteList,
  editList,
}) => {
  const [isChecked, setIsChecked] = useState(list.checked);
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(list.text);
  const [editID, setEditID] = useState(0);

  const node = useRef<HTMLFormElement | null>(null);

  // To Close when click outside without clicking Cancel Button
  useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener("mousedown", handleCancel);
    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener("mousedown", handleCancel);
    };
  }, []);

  const handleCheck = (id: number) => {
    toggleChecked(id);
    setIsChecked(!isChecked);
  };

  const handleDelete = (id: number) => {
    deleteList(id);
  };

  const handleDblClick = (id: number, text: string | number) => {
    setIsEdit(true);
    setEditID(id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleEdit = () => {
    editList(editID, editText);
    setIsEdit(false);
  };

  const handleCancel = (e: any) => {
    if (node?.current?.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsEdit(false);
  };

  return (
    <li>
      {!isEdit ? (
        <>
          {" "}
          <input
            type="checkbox"
            onChange={() => handleCheck(list.id)}
            defaultChecked={list.checked ? true : false}
          />
          <span
            className={isChecked ? "checked" : ""}
            onDoubleClick={() => handleDblClick(list.id, list.text)}
          >
            {list.text}
          </span>
          <button onClick={() => handleDelete(list.id)}>Delete</button>
        </>
      ) : (
        <form ref={node}>
          <input
            type="text"
            value={editText}
            onChange={handleChange}
            onFocus={(e) => e.target.select()}
          />
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => setIsEdit(false)}>Cancel</button>
        </form>
      )}
    </li>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleChecked: (id: number) => dispatch(toggleChecked(id)),
  deleteList: (id: number) => dispatch(deleteList(id)),
  editList: (id: number, text: any) => dispatch(editList(id, text)),
});

export default connect(null, mapDispatchToProps)(ListItem);
