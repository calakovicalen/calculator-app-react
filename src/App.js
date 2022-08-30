import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import CalcButtons from "./components/CalcButtons";
import Button from "./components/UI/Button";

const btnValues = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
  ["RESET", "="],
];

const toLocaleString = (num) =>
  String(num).replaceAll(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
const removeSpaces = (num) => num.toString().replace(/\s/g, "");

function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  let [themes, setThemes] = useState({
    theme1: 1,
    theme2: 0,
    theme3: 0,
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      });
    }
  };

  const deleteClickHandler = () => {
    if (calc.num && !calc.sign && !calc.res) {
      setCalc({
        ...calc,
        num: toLocaleString(
          Number(removeSpaces(calc.num.toString().slice(0, -1)))
        ),
      });
    } else if (!calc.num && calc.sign && calc.res) {
      setCalc({
        ...calc,
        sign: calc.sign.slice(0, -1),
      });
    } else if (calc.num && calc.sign && calc.res) {
      setCalc({
        ...calc,
        num: toLocaleString(
          Number(removeSpaces(calc.num.toString().slice(0, -1)))
        ),
      });
    }
    console.log(calc);
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const themeHandler = () => {
    if (themes.theme1 && !themes.theme2 && !themes.theme3) {
      setThemes({
        ...themes,
        theme1: 0,
        theme2: 1,
        theme3: 0,
      });
    } else if (!themes.theme1 && themes.theme2 && !themes.theme3) {
      setThemes({
        ...themes,
        theme1: 0,
        theme2: 0,
        theme3: 1,
      });
    } else if (!themes.theme1 && !themes.theme2 && themes.theme3) {
      setThemes({
        ...themes,
        theme1: 1,
        theme2: 0,
        theme3: 0,
      });
    }
  };

  return (
    <div
      className={`App ${
        themes.theme2
          ? "App--theme2"
          : themes.theme3
          ? "App--theme3"
          : "App--theme1"
      }`}
    >
      <div className="calculator-body">
        <Header onTheme={themeHandler} themes={themes} />
        <Input value={calc.num ? calc.num : calc.res} themes={themes} />
        <CalcButtons themes={themes}>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={
                  btn === "="
                    ? "equal buttons-equal"
                    : btn === "RESET"
                    ? "reset buttons-del-and-reset"
                    : btn === "DEL"
                    ? "buttons-del-and-reset"
                    : "buttons-numbers-and-operations"
                }
                value={btn}
                onClick={
                  btn === "RESET"
                    ? resetClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn === "/" || btn === "x" || btn === "-" || btn === "+"
                    ? signClickHandler
                    : btn === "."
                    ? commaClickHandler
                    : btn === "DEL"
                    ? deleteClickHandler
                    : numClickHandler
                }
                themes={themes}
              />
            );
          })}
        </CalcButtons>
      </div>
    </div>
  );
}

export default App;
