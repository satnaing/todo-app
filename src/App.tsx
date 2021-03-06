import React from "react";
import AddList from "./components/AddList";
import ToDoLists from "./components/ToDoLists";

const App: React.FC = () => {
  // const [text, setText] = useState("");
  // const [toDoLists, setToDoLists] = useState(DEFAULT_LIST);

  // console.table(toDoLists);

  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value);
  // };

  // const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();
  //   const newObj = {
  //     id: toDoLists.length + 1,
  //     text: text,
  //     checked: false,
  //   };
  //   setToDoLists([...toDoLists, newObj]);
  //   setText("");
  // };

  // const handleDelete = (id: number) => {
  //   setToDoLists(toDoLists.filter((list) => list.id !== id));
  // };

  // const handleCheck = (id: number) => {
  //   setToDoLists(
  //     toDoLists.map((list) => {
  //       if (list.id === id) {
  //         list.checked = !list.checked;
  //       }
  //       return list;
  //     })
  //   );
  // };

  return (
    <>
      <h1>todoList</h1>
      <ToDoLists />
      {/* <ToDoLists
      // lists={toDoLists}
      // handleDelete={handleDelete}
      // handleCheck={handleCheck}
      /> */}
      <AddList />
      {/* <AddList 
      handleAdd={handleAdd} 
      handleInput={handleInput} 
      text={text} 
      /> */}
    </>
  );
};

export default App;
