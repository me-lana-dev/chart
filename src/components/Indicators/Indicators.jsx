import React, { useContext } from "react";
import { Context } from "../../context/Context";
import styles from "./Indicators.module.css";
import IndicatorsRow from "./IndicatorsRow";

const Indicators = () => {
  const [indicatorsData, statusVisible, setStatusVisible] = useContext(Context);

  //console.log(indicatorsData, statusVisible);
  //console.log(statusVisible);

  const openChart = (e) => {
    e.preventDefault();
    //console.log("click", statusVisible, setStatusVisible);
    //console.log("statusVisible", statusVisible);

    setStatusVisible({
      ...statusVisible,
      chart: true,
      indicators: false,
    });
  };
  return (
    <div className={styles.indicators}>
      <h2 className={styles.indicators__h2}>
        <span>Risk indicators appearing during</span>
        <a
          href="/chart"
          onClick={openChart}
          className={styles.indicators__link}
        >
          publication stage
        </a>
      </h2>

      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbs__link}>
          <a href="/chart" onClick={openChart}>
            Dynamics
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
          >
            <line
              x1="0.646447"
              y1="11.6464"
              x2="5.64645"
              y2="6.64645"
              stroke="#9B3C86"
            />
            <line
              x1="0.353553"
              y1="0.646447"
              x2="6.35355"
              y2="6.64645"
              stroke="#9B3C86"
            />
          </svg>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Code</td>
            <td>Name</td>
            <td>Cases</td>
          </tr>
        </thead>
        <tbody>
          <IndicatorsRow
            indicatorsData={indicatorsData}
            statusVisible={statusVisible}
            setStatusVisible={setStatusVisible}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Indicators;
