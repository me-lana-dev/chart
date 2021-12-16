import React, { useRef } from "react";
import { Bar, Chart } from "react-chartjs-2";
import styles from "./BarChartMonitoring.module.css";

const BarChartMonitoring = () => {
  const ref2 = useRef();
  const chartVidget = [
    { month: "Jan", value01: "98", value02: "53" },
    { month: "Feb", value01: "98", value02: "53" },
    { month: "Mar", value01: "98", value02: "53" },
    { month: "Apr", value01: "98", value02: "53" },
    { month: "Mar", value01: "98", value02: "53" },
    { month: "Jun", value01: "98", value02: "53" },
    { month: "Jul", value01: "98", value02: "53" },
    { month: "Aug", value01: "98", value02: "53" },
    { month: "Sep", value01: "98", value02: "53" },
    { month: "Oct", value01: "98", value02: "53" },
    { month: "Nov", value01: "98", value02: "53" },
    { month: "Dec", value01: "98", value02: "53" },
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
  const dataBarBlue = getParametrsArray(chartVidget, "value01");
  const dataBarPink = getParametrsArray(chartVidget, "value02");

  /* html legend */
  const getOrCreateLegendList = (chart, id) => {
    //console.log(chart);
    const legendContainer = document.getElementById(id);

    let listContainer;

    if (legendContainer) {
      listContainer = legendContainer.querySelector("ul");
    }

    if (!listContainer) {
      listContainer = document.createElement("ul");
      listContainer.style.display = "flex";
      listContainer.style.flexDirection = "row";
      listContainer.style.margin = 0;
      listContainer.style.padding = 0;

      if (legendContainer) {
        legendContainer.appendChild(listContainer);
      }
      //legendContainer.appendChild(listContainer);
    }

    return listContainer;
  };

  const htmlLegendPlugin2 = {
    id: "htmlLegend2",
    afterUpdate(chart, args, options) {
      const ul = getOrCreateLegendList(chart, options.containerID);

      // Remove old legend items
      while (ul.firstChild) {
        ul.firstChild.remove();
      }

      // Reuse the built-in legendItems generator
      const items = chart.options.plugins.legend.labels.generateLabels(chart);

      items.forEach((item) => {
        const li = document.createElement("li");
        li.style.alignItems = "center";
        li.style.cursor = "pointer";
        li.style.display = "flex";
        li.style.flexDirection = "row";
        li.style.marginLeft = "60px";

        li.onclick = () => {
          const { type } = chart.config;
          if (type === "pie" || type === "doughnut") {
            // Pie and doughnut charts only have a single dataset and visibility is per item
            chart.toggleDataVisibility(item.index);
          } else {
            chart.setDatasetVisibility(
              item.datasetIndex,
              !chart.isDatasetVisible(item.datasetIndex)
            );
          }
          chart.update();
        };

        // Color box
        const boxSpan = document.createElement("span");
        boxSpan.style.background = item.fillStyle;
        boxSpan.style.borderColor = item.strokeStyle;
        boxSpan.style.borderWidth = item.lineWidth + "px";
        boxSpan.style.display = "inline-block";
        boxSpan.style.height = "18px";
        boxSpan.style.marginRight = "10px";
        boxSpan.style.width = "18px";
        boxSpan.style.borderRadius = "50%";

        // Text
        const textContainer = document.createElement("p");
        textContainer.style.color = "white";
        textContainer.style.margin = 0;
        textContainer.style.padding = 0;
        textContainer.style.fontSize = "14px";
        textContainer.style.fontWeight = "300";
        textContainer.style.textDecoration = item.hidden ? "line-through" : "";

        const text = document.createTextNode(item.text);
        textContainer.appendChild(text);

        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
      });
    },
  };

  Chart.register({ htmlLegendPlugin2 });

  const options = {
    plugins: {
      chartAreaCols: false,
      htmlLegend: false,
      htmlLegend2: {
        containerID: "legend-container2",
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        max: 105,
        min: 0,
        ticks: {
          stepSize: 15,
          beginAtZero: true,
          drawTicks: false,
          display: false,
          padding: 0,
        },
        grid: {
          borderColor: "transparent",
          tickColor: false,
          color: "RGBA(231, 235, 239, 0.25)",
        },
      },
      x: {
        stacked: false,
        ticks: {
          color: "#E7EBEF",
        },
        grid: {
          display: false,
          borderColor: "RGBA(231, 235, 239, 0.25)",
          color: "red",
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
        label: "Total procedures",
        data: dataBarBlue,
        backgroundColor: "#37B5EB",
        borderColor: "#37B5EB",
        pointBorderWidth: 0,
        categoryPercentage: "0.6",
        barPercentage: "0.7",
        pointHoverBackgroundColor: "RGBA(55, 181, 235, 1)",
      },
      {
        label: "Risky procedures",
        data: dataBarPink,
        backgroundColor: "#E08BD0",
        borderColor: "#E08BD0",
        categoryPercentage: "0.6",
        barPercentage: "0.7",
        pointHoverBackgroundColor: "#E08BD0",
      },
    ],
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.chart}>
        <div className={styles.chart__top}>
          <h2 className={styles.chart__h2}>
            Average allocation of the red-flags
          </h2>
          <div id="legend-container2"></div>
        </div>
        <Bar ref={ref2} data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChartMonitoring;
