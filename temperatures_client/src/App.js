import React from "react";
import BarChart from "./components/BarChart.js";
import "./App.css";

const App = () => {
  const getData = () => {
    fetch("/locations")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };
  getData();
  return (
    <div className="App">
      <BarChart />
    </div>
  );
};

export default App;