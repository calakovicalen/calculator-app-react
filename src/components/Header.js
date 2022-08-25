import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1 className={classes["main-header"]}>calc</h1>
      <div className={classes.theme}>theme</div>
      <div className={classes["theme-container"]}>
        <div className={classes.numbers}>1 2 3</div>
        <div className={classes["button-theme-switcher-container"]}>
          <div className={classes["button-theme-switcher"]}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
