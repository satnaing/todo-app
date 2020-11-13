import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addToDoList } from "../redux/actions/toDoList.actions";

interface Props {
  addToDoList: (txt: any) => Promise<any>;
}

const AddList: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [spanText, setSpanText] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpanText(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.addToDoList(inputRef?.current?.value);
    setSpanText("");
  };

  return (
    <form>
      <input
        type="text"
        // value={text}
        onChange={handleInput}
        value={spanText}
        ref={inputRef}
      />

      <button
        type="submit"
        onClick={handleClick}
        // onClick={(inputRef?.current?.value) => addToDoList(inputRef?.current?.value)}
      >
        Add
      </button>
    </form>
  );
};

const mapStateToProps = (state: any) => {
  return { lists: state.todolists };
};

const mapDispatchToProps = (dispatch: any) => ({
  addToDoList: (txt: any) => dispatch(addToDoList(txt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddList);
