import classes from "./Input.module.css";
import { Textfit } from "react-textfit";

const Input = ({ value, themes }) => {
  return (
    <Textfit
      className={`${classes[`calculator-input`]}
      ${
        themes.theme2
          ? `${classes["calculator-input--theme2"]}`
          : themes.theme3
          ? `${classes["calculator-input--theme3"]}`
          : `${classes["calculator-input--theme1"]}`
      }`}
      mode="single"
      max={56}
    >
      {value}
    </Textfit>
  );
};

export default Input;
