import React from "react";
import { Link } from "react-router-dom";
import styles from "./TableIndicators.module.css";

const Indicators = () => {
  return (
    <div className={styles.indicators}>
      <h2 className={styles.indicators__h2}>
        <span>Risk indicators appearing during</span>
        <a href="/" className={styles.indicators__link}>
          publication stage
        </a>
      </h2>

      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbs__link}>
          <Link to="/chart">Dynamics</Link>
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
          <tr>
            <td>RI-PS-001</td>
            <td>
              Short or inadequate notice to bidders to submit expressions of
              interest or bids
            </td>
            <td>
              <a href="/">23</a>
            </td>
          </tr>
          <tr>
            <td>RI-PS-004</td>
            <td>Splitting purchases to avoid procurement thresholds</td>
            <td>
              <a href="/">20</a>
            </td>
          </tr>
          <tr>
            <td>RI-PS-006</td>
            <td>
              Direct awards in contravention to the provisions of the
              procurement plan
            </td>
            <td>
              <a href="/">20</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Indicators;