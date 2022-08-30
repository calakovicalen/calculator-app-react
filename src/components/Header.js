import classes from "./Header.module.css";

const Header = (props) => {
  const themes = props.themes;
  return (
    <header className={classes["header"]}>
      <h1
        className={`${classes["main-header"]}
      ${
        themes.theme2
          ? classes["main-header--theme2"]
          : themes.theme3
          ? classes["main-header--theme3"]
          : classes["main-header--theme1"]
      }
        `}
      >
        calc
      </h1>
      <div
        className={`${classes["theme"]}
      ${
        themes.theme2
          ? classes["theme--theme2"]
          : themes.theme3
          ? classes["theme--theme3"]
          : classes["theme--theme1"]
      }
        `}
      >
        theme
      </div>
      <div className={classes["theme-container"]}>
        <div
          className={`${classes["numbers"]}
        ${
          themes.theme2
            ? classes["numbers--theme2"]
            : themes.theme3
            ? classes["numbers--theme3"]
            : classes["numbers--theme1"]
        }
          `}
        >
          1 2 3
        </div>
        <div
          className={`${classes["button-theme-switcher-container"]}
        ${
          themes.theme2
            ? classes["button-theme-switcher-container--theme2"]
            : themes.theme3
            ? classes["button-theme-switcher-container--theme3"]
            : classes["button-theme-switcher-container--theme1"]
        }
          `}
        >
          <div
            className={`${classes["button-theme-switcher"]}
              ${
                themes.theme2
                  ? classes["button-theme-switcher--theme2"]
                  : themes.theme3
                  ? classes["button-theme-switcher--theme3"]
                  : classes["button-theme-switcher--theme1"]
              }
                `}
            onClick={props.onTheme}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
