import React, { useState } from "react";
import AddList from "./components/AddList";
import ToDoList from "./components/ToDoList";

// Material-UI
import Container from "@material-ui/core/Container";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const DEFAULT_LIST = [{ id: 1, text: "This is todo list", checked: false }];

const App: React.FC = () => {
  const [text, setText] = useState("");
  const [toDoLists, setToDoLists] = useState(DEFAULT_LIST);

  // console.table(toDoLists);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newObj = {
      id: toDoLists.length + 1,
      text: text,
      checked: false,
    };
    setToDoLists([...toDoLists, newObj]);
    setText("");
  };

  const handleDelete = (id: number) => {
    setToDoLists(toDoLists.filter((list) => list.id !== id));
  };

  const handleCheck = (id: number) => {
    setToDoLists(
      toDoLists.map((list) => {
        if (list.id === id) {
          list.checked = !list.checked;
        }
        return list;
      })
    );
  };

  return (
    <>
      <Container>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "50vh" }}
        >
          <Card style={{ maxWidth: "500px", width: "500px" }}>
            <CardContent>
              <Typography
                align="center"
                variant="h5"
                component="h2"
                gutterBottom
              >
                todoList
              </Typography>
              <ToDoList
                lists={toDoLists}
                handleDelete={handleDelete}
                handleCheck={handleCheck}
              />
              {/* <hr /> */}
              <AddList
                handleAdd={handleAdd}
                handleInput={handleInput}
                text={text}
              />
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
};

export default App;
