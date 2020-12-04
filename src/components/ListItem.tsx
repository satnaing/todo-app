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
import { default as LI } from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Input from "@material-ui/core/Input";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    color: theme.palette.secondary.main,
  },
  deleteIcon: {
    color: theme.palette.secondary.main,
  },
  editIcon: {
    color: theme.palette.secondary.main,
  },
  input: {
    color: "#EEEEEE",
    borderColor: "#EEEEEE",
    width: "90%",
  },
}));

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
  const classes = useStyles();
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
    // e.preventDevault();
    if (node?.current?.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsEdit(false);
  };

  return (
    <LI>
      {!isEdit ? (
        <>
          {" "}
          <Checkbox
            edge="start"
            checked={list.checked ? true : false}
            tabIndex={-1}
            disableRipple
            className={classes.checkbox}
            onChange={() => handleCheck(list.id)}
          />
          <ListItemText
            style={{ color: "#EEEEEE" }}
            primary={list.text}
            className={isChecked ? "checked" : ""}
            onDoubleClick={() => handleDblClick(list.id, list.text)}
          />
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDelete(list.id)}
          >
            <DeleteIcon className={classes.deleteIcon} />
          </IconButton>
        </>
      ) : (
        <>
          <Checkbox
            edge="start"
            checked={list.checked ? true : false}
            disabled
            tabIndex={-1}
            disableRipple
            className={classes.checkbox}
          />
          <form
            ref={node}
            onSubmit={(e) => e.preventDefault()}
            style={{ width: "100%" }}
          >
            <Input
              className={classes.input}
              color="secondary"
              fullWidth
              defaultValue={editText}
              onChange={handleChange}
              onFocus={(e) => e.target.select()}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="edit"
                type="submit"
                onClick={handleEdit}
              >
                <EditIcon className={classes.editIcon} />
              </IconButton>
            </ListItemSecondaryAction>
          </form>
        </>
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
