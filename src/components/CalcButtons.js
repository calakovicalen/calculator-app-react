import classes from "./CalcButtons.module.css";

const CalcButtons = ({ children, themes }) => {
  return (
    <div
      className={`${classes["buttons-body"]} ${
        themes.theme2
          ? `${classes["buttons-body--theme2"]}`
          : themes.theme3
          ? `${classes["buttons-body--theme3"]}`
          : `${classes["buttons-body--theme1"]}`
      }`}
    >
      {children}
    </div>
  );
};

export default CalcButtons;
