import React from "react";
import styles from "./Purchases.module.css";

const PurchaseSelect = (props) => {
  const { codeActive, codes } = props.codesIndicators;
  console.log(props);
  const openIndicators = (e) => {
    e.preventDefault();
  };

  const loadData = (e, index) => {
    //console.log(e, index);
    props.setPurchaseData([
      {
        ocid: "OCDS-B3WDP1-MD-1571837868539",
        procurementMethodDetail: "Framework execution",
        classification: "15000000-5",
        estematedValue: 71555247,
        status: "active",
      },
      {
        ocid: "OCDS-B3WDP1-MD-1571837868540",
        procurementMethodDetail: "Restricted tender",
        classification: "15000000-6",
        estematedValue: 1555247,
        status: "active",
      },
      {
        ocid: "OCDS-B3WDP1-MD-1571837868539",
        procurementMethodDetail: "Request for quotation",
        classification: "15000000-7",
        estematedValue: 1555247,
        status: "evaluation",
      },
    ]);
  };

  return (
    <div className="dropdown">
      <a
        href="/"
        onClick={openIndicators}
        className={styles.splitPurchases__link}
      >
        {codes[codeActive]}
      </a>
      <ul>
        {codes.map((code, index) => {
          return (
            <li
              key={index}
              onClick={(e) => {
                loadData(e, index);
              }}
            >
              {code}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PurchaseSelect;
