import React, { useState } from "react";
import BarChart from "../components/BarChart/BarChart";
// import ClickEvents from "./components/ClickEvents/ClickEvents";
import "../styles/App.css";

const Chart = () => {
  const [chartData, setChartData] = useState([
    { stage: "Announcement", value: 3, average: 2 },
    { stage: "Clarification", value: 3, average: 4 },
    { stage: "Qualification", value: 3, average: 5 },
    { stage: "Tendering", value: 3, average: 7 },
    { stage: "Evaluation", value: 3, average: 2 },
    { stage: "Awarding", value: 3, average: 5 },
    { stage: "Contracting", value: 3, average: 6 },
  ]);

  const changeChartData = (newChartData) => {
    setChartData([...chartData, newChartData]);
  };

  return (
    <div className="App">
      <BarChart chartData={chartData} onChange={changeChartData} />
    </div>
  );
};

export default Chart;
