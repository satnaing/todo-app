const DEFAULT_LIST = [{ id: 1, text: "This is todo list", checked: false }];

const todoListsReducer = (todoLists = DEFAULT_LIST, action: any) => {
  switch (action.type) {
    case "DISPLAY_LISTS":
      return todoLists;
    case "ADD_TODO":
      const newObj = {
        id: todoLists.length + 1,
        text: action.payload.text,
        checked: false,
      };
      return [...todoLists, newObj];
    default:
      return todoLists;
  }
};

export default todoListsReducer;
