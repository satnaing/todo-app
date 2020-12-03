import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addToDoList } from "../redux/actions/toDoList.actions";

// Material-UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

interface Props {
  addToDoList: (txt: any) => Promise<any>;
}

const AddList: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [spanText, setSpanText] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpanText(e.target.value);
    // console.log(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // props.addToDoList(inputRef?.current?.value);
    props.addToDoList(spanText);
    // console.log(spanText);
    setSpanText("");
  };

  return (
    // <form onSubmit={(e) => e.preventDefault()}>
    <Grid container direction="row" spacing={3} style={{ padding: "0 10px" }}>
      <Grid item xs={2}></Grid>
      <Grid item xs={6}>
        <form id="my-form" onSubmit={(e) => e.preventDefault()}>
          <TextField
            fullWidth
            onChange={handleInput}
            value={spanText}
            ref={inputRef}
            placeholder="Add anything"
          />
        </form>
      </Grid>

      <Grid item xs={2}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleClick}
          form="my-form"
        >
          Add
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
    // </form>
  );
};

const mapStateToProps = (state: any) => {
  return { lists: state.todolists };
};

const mapDispatchToProps = (dispatch: any) => ({
  addToDoList: (txt: any) => dispatch(addToDoList(txt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddList);
