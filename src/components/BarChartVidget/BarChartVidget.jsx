import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import styles from "./BarChartVidget.module.css";

const BarChartVidget = () => {
  const ref2 = useRef();
  const chartVidget = [
    { month: "AUG", value01: "58", value02: "82" },
    { month: "SEP", value01: "48", value02: "58" },
    { month: "OCT", value01: "94", value02: "48" },
    { month: "NOV", value01: "10", value02: "28" },
    { month: "DEC", value01: "60", value02: "48" },
  ];
  // console.log(chartVidget);
  // Get Parameters from chartData
  const getParametrsArray = (params, param) => {
    const array = [];
    params.map((x) => {
      return array.push(x[param]);
    });
    return array;
  };
  const labels = getParametrsArray(chartVidget, "month");
  const dataBarPink = getParametrsArray(chartVidget, "value01");
  const dataBarPurple = getParametrsArray(chartVidget, "value02");

  const options = {
    plugins: {
      chartAreaCols: false,
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        ticks: {
          stepSize: 20,
          beginAtZero: true,
          drawTicks: false,
          display: false,
          padding: 0,
        },
        grid: {
          borderColor: "transparent",
          tickColor: false,
          color: "#e5e5e5",
        },
      },
      x: {
        stacked: false,
        grid: {
          display: false,
          borderColor: "#e5e5e5",
        },
      },
    },
  };
  // Plugins for Chart
  // console.log(Chart);
  //Chart.register({ chartAreaCols2 });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Value 01",
        data: dataBarPink,
        backgroundColor: "#db316f",
        borderColor: "#db316f",
        pointBorderWidth: 0,
        categoryPercentage: "0.5",
        barPercentage: "0.6",
        pointHoverBackgroundColor: "#db316f",
      },
      {
        label: "Value 02",
        data: dataBarPurple,
        backgroundColor: "#642ca7",
        borderColor: "#642ca7",
        categoryPercentage: "0.5",
        barPercentage: "0.6",
        pointHoverBackgroundColor: "#642ca7",
      },
    ],
  };

  return (
    <div className={styles.chart}>
      <Bar ref={ref2} data={data} options={options} />
    </div>
  );
};

export default BarChartVidget;
