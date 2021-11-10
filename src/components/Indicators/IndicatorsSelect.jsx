import React from "react";
import styles from "./Indicators.module.css";

const IndicatorsSelect = (props) => {
  const { labelActive, labels } = props.labelsIndicators;

  const filterLabel = labels.filter((label) => label["id"] === labelActive);
  const filterLabels = labels.filter((label) => label["id"] !== labelActive);
  //console.log("filterLabel", filterLabel);
  //console.log("filterLabels", filterLabels);

  const openSelect = (e) => {
    e.preventDefault();
  };

  const loadLabel = (e, index) => {
    console.log(index);
    e.preventDefault();
    props.setIndicatorsData([
      {
        code: "RI-PS-004",
        description:
          "Short or inadequate notice to bidders to submit expressions of interest or bids",
        cases: 2,
      },
      {
        code: "RI-PS-001",
        description: "Splitting purchases to avoid procurement thresholds",
        cases: 1,
      },
    ]);

    props.setLabelIndicators({
      ...props.labelsIndicators,
      labelActive: index,
    });
  };

  return (
    <div className="dropdown">
      <a href="/" onClick={openSelect} className={styles.indicators__link}>
        {filterLabel[0]["label"]} stage
      </a>
      <ul>
        {filterLabels.map((label, index) => {
          return (
            <li
              key={index}
              onClick={(e) => {
                loadLabel(e, index);
              }}
            >
              {label["label"]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IndicatorsSelect;
