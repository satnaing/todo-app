const DEFAULT_LIST = [
  { id: Date.now(), text: "This is todo list", checked: false },
  { id: Date.now() + 1, text: "Double Click the text to edit", checked: false },
];

const todoListsReducer = (todoLists = DEFAULT_LIST, action: any) => {
  switch (action.type) {
    case "DISPLAY_LISTS":
      return todoLists;
    case "ADD_TODO":
      const newObj = {
        id: Date.now(),
        text: action.payload.text,
        checked: false,
      };
      return [...todoLists, newObj];
    case "TOGGLE_CHECK":
      const newList = todoLists.map((list) => {
        if (list.id === action.payload.id) {
          list.checked = !list.checked;
        }
        return list;
      });
      return newList;
    case "DELETE_LIST":
      const deletedList = todoLists.filter(
        (list) => list.id !== action.payload.id
      );
      return deletedList;
    case "EDIT_LIST":
      const editedList = todoLists.map((list) => {
        if (list.id === action.payload.id) {
          list.text = action.payload.text;
        }
        return list;
      });
      return editedList;
    default:
      return todoLists;
  }
};

export default todoListsReducer;
