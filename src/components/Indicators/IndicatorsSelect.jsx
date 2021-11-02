import React from "react";
import styles from "./Indicators.module.css";

const IndicatorsSelect = (props) => {
  console.log(props);

  const { labelActive, labels } = props.labelsIndicators;
  console.log(labelActive, labels);

  const openSelect = (e) => {
    e.preventDefault();
  };

  const loadLabel = (e, index) => {
    console.log(e, index);
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
  };

  return (
    <div className="dropdown">
      <a href="/" onClick={openSelect} className={styles.indicators__link}>
        {labels[labelActive]} stage
      </a>
      <ul>
        {labels.map((label, index) => {
          return (
            <li
              key={index}
              onClick={(e) => {
                loadLabel(e, index);
              }}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IndicatorsSelect;
