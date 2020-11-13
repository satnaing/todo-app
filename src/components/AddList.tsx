import React from "react";

// Material-UI
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

interface Props {
  text: string | number;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AddList: React.FC<Props> = ({ text, handleInput, handleAdd }) => {
  return (
    <form>
      <Grid container spacing={1}>
        <Grid item sm={1} />
        <Grid item xs={12} sm={8}>
          <Input
            placeholder="Type Anything"
            fullWidth
            value={text}
            onChange={handleInput}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <Button
            type="submit"
            onClick={handleAdd}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddList;
