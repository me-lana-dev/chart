import React, { useState, useRef } from "react";
import styles from "./BarChart.module.css";
import { Bar, Chart } from "react-chartjs-2";
// import Indicators from "../../Indicators/Indicators";
// import SplitPurchases from "../../SplitPurchases/SplitPurchases";

function BarChart({ chartData }) {
  // Get Parameters from chartData
  const getParametrsArray = (params, param) => {
    const array = [];
    params.map((x) => {
      array.push(x[param]);
    });
    return array;
  };

  const labels = getParametrsArray(chartData, "stage");
  const dataLinesBlue = getParametrsArray(chartData, "value");
  const dataLinesPurple = getParametrsArray(chartData, "average");

  // Plugins for Cart
  /* columns */
  const chartAreaCols = {
    id: "chartAreaCols",
    beforeDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { left, top, width, height },
      } = chart;
      ctx.save();

      for (var i = 0; i < 7; i++) {
        // for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        var x = left + (width / 7) * i; // x coordinate
        var y = top; // y coordinate
        var widthRect = width / 7;
        var heightRect = height;

        ctx.rect(x, y, widthRect, heightRect);

        if (i % 2) {
          // ctx.fillStyle = "#E7EBEF";
          // ctx.fill();
        } else {
          ctx.fillStyle = "#E7EBEF";
          ctx.fillStyle = "rgba(231, 235, 239, 0.5)";
          ctx.fill();
          // ctx.stroke();
        }
        // }
      }

      ctx.restore();
    },
  };

  Chart.register({ chartAreaCols });

  /* html legend */
  const getOrCreateLegendList = (chart, id) => {
    const legendContainer = document.getElementById(id);
    let listContainer = legendContainer.querySelector("ul");

    if (!listContainer) {
      listContainer = document.createElement("ul");
      listContainer.style.display = "flex";
      listContainer.style.flexDirection = "row";
      listContainer.style.margin = 0;
      listContainer.style.padding = 0;

      legendContainer.appendChild(listContainer);
    }

    return listContainer;
  };

  const htmlLegendPlugin = {
    id: "htmlLegend",
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
        li.style.marginLeft = "30px";

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
        boxSpan.style.height = "20px";
        boxSpan.style.marginRight = "10px";
        boxSpan.style.width = "20px";
        boxSpan.style.borderRadius = "50%";

        // Text
        const textContainer = document.createElement("p");
        textContainer.style.color = item.fontColor;
        textContainer.style.margin = 0;
        textContainer.style.padding = 0;
        textContainer.style.textDecoration = item.hidden ? "line-through" : "";

        const text = document.createTextNode(item.text);
        textContainer.appendChild(text);

        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
      });
    },
  };

  Chart.register({ htmlLegendPlugin });

  const options = {
    radius: 6,
    pointHoverRadius: 6,
    responsive: true,
    plugins: {
      chartAreaCols: {
        id: "chartAreaCols",
      },
      htmlLegend: {
        containerID: "legend-container",
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    animations: {
      y: {
        easing: "easeInOutElastic",
        from: (ctx) => {
          if (ctx.type === "data") {
            if (ctx.mode === "default" && !ctx.dropped) {
              ctx.dropped = true;
              return 0;
            }
          }
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        min: 0,
        max: 8,
        ticks: {
          color: "#959A9E",
          size: 14,
          padding: 10,
        },
        grid: {
          color: "#E7EBEF",
          borderColor: "#FFFFFF",
        },
      },
      x: {
        grid: {
          display: false,
          borderColor: "#E7EBEF",
        },
        ticks: {
          tickColor: "red",
          align: "center",
          padding: 0,
          color: "#959A9E",
        },
      },
    },
  };

  const data = (canvas) => {
    return {
      labels: labels,
      options: { options },
      plugins: [htmlLegendPlugin, chartAreaCols],
      datasets: [
        {
          label: "my first dataset",
          backgroundColor: "#36B5EB",
          borderColor: "#36B5EB",
          data: dataLinesBlue,
          borderWidth: 1,
          type: "line",
        },
        {
          label: "average in the system",
          data: dataLinesPurple,
          backgroundColor: "#9a3c86",
          borderColor: "#9a3c86",
          borderWidth: 1,
          type: "line",
        },
      ],
    };
  };

  const ref = useRef();

  const [clickedDataset, setClickedDataset] = useState("");
  const [clickedElements, setClickedElements] = useState("");
  const [clickedElement, setClickedElement] = useState("");

  const getDatasetAtEvent = (dataset) => {
    if (!dataset.length) return;
    console.log(ref);
    console.log("dataset", dataset);
    setClickedDataset("d");

    // const datasetIndex = dataset[0].datasetIndex;
    // setClickedDataset(data.datasets[datasetIndex].label);
  };

  const getElementsAtEvent = (elements) => {
    if (!elements.length) return;
    console.log("getElements", elements);
    console.log(typeof elements);
    setClickedElements(elements.length);

    const label = ref.current.config._config.data.labels.elements;
    console.log(label);
  };

  const getElementAtEvent = (element) => {
    if (!element.length) return;
    const { datasetIndex, index } = element[0];
    // console.log(data.datasets[datasetIndex].data[index]);
    console.log("getElement", datasetIndex, index);
    //const indexes = `${datasetIndex} - ${index}`;
    const indexes = labels[index];
    setClickedElement(indexes);
    // setClickedElement(
    //   `${data.labels[index]} - ${data.datasets[datasetIndex].data[index]}`
    // );
  };

  return (
    <div className={styles.chart}>
      <div className={styles.chart__top}>
        <h2 className={styles.chart__h2}>Red Flags Dynamics</h2>
        <div id="legend-container"></div>
      </div>
      <Bar
        ref={ref}
        data={data}
        options={options}
        getDatasetAtEvent={getDatasetAtEvent}
        getElementAtEvent={getElementAtEvent}
        getElementsAtEvent={getElementsAtEvent}
      />
      <p> clickedElement = {clickedElement}</p>
      <p> clickedDataset = {clickedDataset}</p>
      <p> clickedElements = {clickedElements}</p>
    </div>
  );
}

export default BarChart;
