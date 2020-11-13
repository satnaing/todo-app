export const todoLists = () => {
  return {
    type: "DISPLAY_LISTS",
  };
};

export const addToDoList = (text: any) => {
  return {
    type: "ADD_TODO",
    payload: {
      text,
    },
  };
};

export const toggleChecked = (id: number) => ({
  type: "TOGGLE_CHECK",
  payload: {
    id,
  },
});

export const deleteList = (id: number) => ({
  type: "DELETE_LIST",
  payload: {
    id,
  },
});
