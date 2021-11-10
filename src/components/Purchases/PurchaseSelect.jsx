import React from "react";
import styles from "./Purchases.module.css";

const PurchaseSelect = (props) => {
  const { codeActive, codes } = props.codesIndicators;

  const filterCode = codes.filter((code) => code["id"] === codeActive);
  const filterCodes = codes.filter((code) => code["id"] !== codeActive);
  console.log("filterCode 1", filterCode[0]["id"], filterCode[0]["code"]);
  console.log(filterCodes);

  const openIndicators = (e) => {
    e.preventDefault();
  };

  const loadData = (e, index, id) => {
    console.log("===================");
    console.log("indexPurchase", index);
    console.log(
      "filterCode 2",
      "id = ",
      filterCode[0]["id"],
      filterCode[0]["code"]
    );
    console.log(filterCodes);
    console.log("===================");
    e.preventDefault();
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

    props.setCodeIndicators({
      ...props.codesIndicators,
      codeActive: id,
    });
  };

  return (
    <div className="dropdown">
      <a
        href="/"
        onClick={openIndicators}
        className={styles.splitPurchases__link}
      >
        {filterCode[0]["code"]}
      </a>
      <ul>
        {filterCodes.map((code, index) => {
          return (
            <li
              key={code["id"]}
              onClick={(e) => {
                loadData(e, index, code["id"]);
              }}
            >
              {code["code"]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PurchaseSelect;
