import React from "react";

interface Props {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  handleRef: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  formRef: any;
}

const InputTest: React.FC<Props> = ({ inputRef, handleRef, formRef }) => {
  return (
    <form ref={formRef}>
      <input type="text" ref={inputRef} />
      <button onClick={handleRef}>Click Me</button>
    </form>
  );
};

export default InputTest;
