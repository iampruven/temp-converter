import { useState } from "react";
import "./App.css";

function TempForm(props) {
  return (
    <form className="form-style">
      <label htmlFor="degrees">Degrees</label>
      <input
        value={props.tempNum}
        placeholder="Input a number"
        onChange={(e) => props.onSetTempNum(e.target.value)}
        type="number"
        name="degrees"
        id="degrees"
        className="in-style"
        required
      />
      <label htmlFor="type">Type</label>
      <select
        value={props.tempType}
        onChange={(e) => props.onTempType(e.target.value)}
        className="in-style"
        id="type"
      >
        <option value="fahrenheit">Fahrenheit</option>
        <option value="celcius">Celcius</option>
      </select>
      <button className="btn-style" onClick={(e) => props.handleCalculate(e)}>
        Convert
      </button>
    </form>
  );
}
function Header() {
  return <h1 className="heading">Temperature Converter</h1>;
}

function Results(props) {
  return (
    <div className="results">  
      {props.newTemp && (
        <p>
          Results: {props.newTemp}{" "}
          {props.tempType === "fahrenheit"
            ? "\u2103"
            : "\u2109"}
        </p>
      )}
    </div>
  );
}
function App() {
  const [tempNum, setTempNum] = useState("");
  const [tempType, setTempType] = useState("celcius");
  const [newTemp, setNewTemp] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();
    if (tempType === "fahrenheit") {
      //fahrenheit -> celcius
      setNewTemp(Math.floor((tempNum - 32) * 0.5556));
    } else {
      //celcius->fahrenheit
      console.log("teh", tempNum);
      setNewTemp(Math.floor(tempNum * 1.8 + 32));
    }
    return setTempNum("");
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <div className="App">
          <TempForm
            tempNum={tempNum}
            onSetTempNum={setTempNum}
            handleCalculate={handleCalculate}
            onTempType={setTempType}
            tempType={tempType}
          />

            <Results newTemp={newTemp} tempType={tempType} />

        </div>
      </main>
    </>
  );
}

export default App;
