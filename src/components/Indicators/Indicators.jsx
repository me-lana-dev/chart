import React, { useContext } from "react";
import { Context } from "../../context/Context";
import styles from "./Indicators.module.css";
import IndicatorsSelect from "./IndicatorsSelect";
import IndicatorsRow from "./IndicatorsRow";

const Indicators = () => {
  const [
    indicatorsData,
    setIndicatorsData,
    purchaseData,
    setPurchaseData,
    statusVisible,
    setStatusVisible,
    labelsIndicators,
    setLabelIndicators,
    codesIndicators,
    setCodeIndicators,
  ] = useContext(Context);

  //console.log(labelsIndicators);
  //console.log(codesIndicators, setCodeIndicators);

  // Get Parameters from chartData
  const getParametrsArray = (params, param) => {
    const array = [];
    params.map((x) => {
      return array.push(x[param]);
    });
    return array;
  };

  const indicatorsCodes = getParametrsArray(indicatorsData, "code");
  //console.log(indicatorsCodes);

  const openChart = (e) => {
    e.preventDefault();

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
        <IndicatorsSelect
          setIndicatorsData={setIndicatorsData}
          labelsIndicators={labelsIndicators}
          setLabelIndicators={setLabelIndicators}
        />
      </h2>

      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbs__link}>
          <a href="/" onClick={openChart}>
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
            indicatorsCodes={indicatorsCodes}
            purchaseData={purchaseData}
            setPurchaseData={setPurchaseData}
            statusVisible={statusVisible}
            setStatusVisible={setStatusVisible}
            codesIndicators={codesIndicators}
            setCodeIndicators={setCodeIndicators}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Indicators;
