import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input type={props.type} className={classes[`calculator-input`]}></input>
  );
};

export default Input;
