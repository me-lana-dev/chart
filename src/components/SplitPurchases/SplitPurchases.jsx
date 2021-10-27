import React from "react";
import { Link } from "react-router-dom";
import styles from "./SplitPurchases.module.css";

const SplitingPurchases = () => {
  return (
    <div className={styles.splitPurchases}>
      <h2 className={styles.splitPurchases__h2}>
        <span>Splitting purchases to avoid procurement thresholds</span>
        <a href="/" className={styles.splitPurchases__link}>
          RI-PS-04
        </a>
      </h2>
      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbs__link}>
          <Link to="/indicators">Indicators</Link>
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
            <td>OCID</td>
            <td>Method</td>
            <td>CPV Class</td>
            <td>Expected value</td>
            <td>Current status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="/">OCDS-B3WDP1-MD-1571837868539</a>
            </td>
            <td>Framework execution</td>
            <td>15000000-8</td>
            <td>71 555 247.00</td>
            <td>active</td>
          </tr>
          <tr>
            <td>
              <a href="/">OCDS-B3WDP1-MD-1571837868539</a>
            </td>
            <td>Restricted tender</td>
            <td>14000000-1</td>
            <td>71 555 247.00</td>
            <td>active</td>
          </tr>
          <tr>
            <td>
              <a href="/">OCDS-B3WDP1-MD-1571837868539</a>
            </td>
            <td>Request for quotation</td>
            <td>15000000-8</td>
            <td>71 555 247.00</td>
            <td>evaluation</td>
          </tr>
          <tr>
            <td>
              <a href="/">OCDS-B3WDP1-MD-1571837868539</a>
            </td>
            <td>EU open tender</td>
            <td>14000000-1</td>
            <td>71 555 247.00</td>
            <td>cancelled</td>
          </tr>
          <tr>
            <td>
              <a href="/">OCDS-B3WDP1-MD-1571837868539</a>
            </td>
            <td>Contract reporting</td>
            <td>15000000-8</td>
            <td>71 555 247.00</td>
            <td>unsuccessful</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SplitingPurchases;
