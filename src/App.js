import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import CalcButtons from "./components/CalcButtons";

function App() {
  const buttonHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <div className="calculator-body">
        <Header />
        <Input type="text" />
        <CalcButtons buttonHandler={buttonHandler} />
      </div>
    </div>
  );
}

export default App;
