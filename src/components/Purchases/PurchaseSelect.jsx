import React from "react";
import styles from "./Purchases.module.css";

const PurchaseSelect = (props) => {
  console.log(props);
  const openIndicators = (e) => {
    e.preventDefault();
  };

  return (
    <div className="dropdown">
      <a
        href="/"
        onClick={openIndicators}
        className={styles.splitPurchases__link}
      >
        RI-PS-01
      </a>
      <ul>
        <li>RI-PS-003</li>
        <li>RI-PS-005</li>
      </ul>
    </div>
  );
};

export default PurchaseSelect;
