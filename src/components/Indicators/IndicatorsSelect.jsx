import React from "react";
import styles from "./Indicators.module.css";

const IndicatorsSelect = (props) => {
  console.log(props);

  const { labelActive, labels } = props.labelsIndicators;
  console.log(labelActive, labels);

  const openSelect = (e) => {
    e.preventDefault();
  };
  return (
    <div className="dropdown">
      <a href="/" onClick={openSelect} className={styles.indicators__link}>
        {labels[labelActive]} stage
      </a>
      <ul>
        {labels.map((label) => {
          return <li>{label}</li>;
        })}
      </ul>
    </div>
  );
};

export default IndicatorsSelect;
