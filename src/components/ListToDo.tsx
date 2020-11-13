import React, { useState } from "react";
import { listObj } from "./ToDoList";

// Material-UI
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";

import "./to-do-list.css";

interface Props {
  list: listObj;
  handleDelete: (id: number) => void;
  handleCheck: (id: number) => void;
}

const ListToDo: React.FC<Props> = ({ list, handleDelete, handleCheck }) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleDblClick = (id: number) => {
    console.log(isEditing);
    console.log(id);
    setIsEditing(true);
  };
  console.log(isEditing);
  return (
    <ListItem dense button>
      {isEditing === false ? (
        <>
          <ListItemIcon>
            <Checkbox
              color="primary"
              onClick={() => handleCheck(list.id)}
              checked={list.checked ? true : false}
            />
          </ListItemIcon>
          <ListItemText
            className={list.checked ? "checked" : ""}
            primary={list.text}
            onDoubleClick={() => handleDblClick(list.id)}
          />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(list.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      ) : (
        <>
          <ListItemIcon>
            <Checkbox disabled />
          </ListItemIcon>
          <Input value={list.text} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(list.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default ListToDo;
