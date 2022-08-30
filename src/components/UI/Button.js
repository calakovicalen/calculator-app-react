import classes from "./Button.module.css";

const Button = ({ className, value, onClick, themes }) => {
  return (
    <button
      className={`${classes.buttons} ${
        themes.theme2
          ? `${className}--theme2`
          : themes.theme3
          ? `${className}--theme3`
          : `${className}--theme1`
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
