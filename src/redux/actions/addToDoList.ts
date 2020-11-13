const addToDoList = (text: any) => {
  return {
    type: "ADD_TODO",
    payload: {
      text,
    },
  };
};

export default addToDoList;
