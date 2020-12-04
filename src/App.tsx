import React from "react";
import AddList from "./components/AddList";
import ToDoLists from "./components/ToDoLists";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import Layout from "./ui/Layout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
      {/* <h1>todoList</h1>
      <ToDoLists />
      <AddList /> */}
    </ThemeProvider>
  );
};

export default App;
