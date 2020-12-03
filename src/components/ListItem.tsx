import React, { useState, useEffect, useRef } from "react";
import { listObj } from "./ToDoLists";
import { connect } from "react-redux";
import {
  deleteList,
  editList,
  toggleChecked,
} from "../redux/actions/toDoList.actions";

import "./to-do-list.css";

// Material-UI
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import { default as LI } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

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
  const [isChecked, setIsChecked] = useState(list.checked || false);
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
    <LI dense button>
      {!isEdit ? (
        <>
          <ListItemIcon>
            <Checkbox
              color="primary"
              onChange={() => handleCheck(list.id)}
              checked={list.checked ? true : false}
              // defaultChecked={list.checked ? true : false}
            />
          </ListItemIcon>
          <ListItemText
            className={isChecked ? "checked" : ""}
            onDoubleClick={() => handleDblClick(list.id, list.text)}
            primary={`${list.text}`}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDelete(list.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
          {/* <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDelete(list.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction> */}
        </>
      ) : (
        <form ref={node} onSubmit={(e) => e.preventDefault()}>
          <ListItemIcon>
            <Checkbox
              disabled
              inputProps={{ "aria-label": "disabled checkbox" }}
            />
          </ListItemIcon>
          <TextField
            defaultValue={editText}
            onChange={handleChange}
            // onFocus={(e) => e.target.select()}
            autoFocus
            margin="dense"
          />
          <ListItemSecondaryAction>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleEdit}
              size="small"
            >
              Edit
            </Button>
            <Button
              variant="contained"
              onClick={() => setIsEdit(false)}
              size="small"
            >
              Cancel
            </Button>
          </ListItemSecondaryAction>
        </form>
      )}
    </LI>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleChecked: (id: number) => dispatch(toggleChecked(id)),
  deleteList: (id: number) => dispatch(deleteList(id)),
  editList: (id: number, text: any) => dispatch(editList(id, text)),
});

export default connect(null, mapDispatchToProps)(ListItem);
