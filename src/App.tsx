import React from "react";
import DatePicker from "./components/DatePicker";
import { DateRangeInfo } from "./@types/DatePicker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DatePicker
        onChange={(result: DateRangeInfo) => {
          console.log({ result });
        }}
        showPerDefinedRange={true}
      />
    </div>
  );
}

export default App;
