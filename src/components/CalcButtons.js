import classes from "./CalcButtons.module.css";

const CalcButtons = (props) => {
  return (
    <div className={classes["buttons-body"]}>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
        value="7"
        onClick={props.buttonHandler}
      >
        7
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        8
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        9
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-del-and-reset"]}`}
      >
        DEL
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        4
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        5
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        6
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        +
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        1
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        2
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        3
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        -
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        .
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        0
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        /
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-numbers-and-operations"]}`}
      >
        x
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-del-and-reset"]} ${classes["reset"]}`}
      >
        RESET
      </button>
      <button
        className={`${classes["buttons"]} ${classes["buttons-equal"]} ${classes["equal"]}`}
      >
        =
      </button>
    </div>
  );
};

export default CalcButtons;
