import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addToDoList } from "../redux/actions/toDoList.actions";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
// import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

interface Props {
  addToDoList: (txt: any) => Promise<any>;
}

const useStyles = makeStyles((theme) => ({
  textInput: {
    "& label": {
      color: theme.palette.common.white,
    },
  },
}));

const AddList: React.FC<Props> = (props) => {
  const classes = useStyles();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [spanText, setSpanText] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpanText(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.addToDoList(spanText);
    // props.addToDoList(inputRef?.current?.value);
    setSpanText("");
  };

  return (
    // <form>
    //   <input
    //     type="text"
    //     // value={text}
    //     onChange={handleInput}
    //     value={spanText}
    //     ref={inputRef}
    //   />

    //   <button type="submit" onClick={handleClick}>
    //     Add
    //   </button>
    // </form>
    <form style={{ width: "100%" }}>
      <Grid container>
        <Grid item sm={10}>
          <TextField
            type="text"
            id="standard-start-adornment"
            label="What do you want to do?"
            color="secondary"
            fullWidth
            classes={{ root: classes.textInput }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleInput}
            value={spanText}
            // ref={inputRef}
          />
          {/* {console.log(inputRef)} */}
        </Grid>
        <Grid item sm={2} style={{ textAlign: "center" }}>
          <IconButton aria-label="add" type="submit" onClick={handleClick}>
            <Icon color="secondary" style={{ fontSize: "3rem" }}>
              add_circle
            </Icon>
          </IconButton>
        </Grid>
      </Grid>
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
