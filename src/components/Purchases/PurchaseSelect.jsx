import React from "react";
import styles from "./Purchases.module.css";

const PurchaseSelect = (props) => {
  const openIndicators = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <a
        href="/"
        onClick={openIndicators}
        className={styles.splitPurchases__link}
      >
        RI-PS-04
      </a>
    </div>
  );
};

export default PurchaseSelect;
