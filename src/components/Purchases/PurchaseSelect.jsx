import React, { useState } from "react";
import styles from "./Purchases.module.css";

const PurchaseSelect = (props) => {
  const { codeActive, codes } = props.codesIndicators;

  // const [codeP, setCode] = useState(codes[codeActive]);
  // console.log("codeP", codeP);

  //let filterCodes = codes.filter((code, i) => code !== codeP);
  //console.log("filterCodes", filterCodes);

  //console.log(props);
  const openIndicators = (e) => {
    e.preventDefault();
  };

  const loadData = (e, index) => {
    console.log(index);
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

    //console.log(index, code);

    //const indexI = codes.filter((item, code) => console.log(item, code));
    //console.log("indexI", indexI);

    // setCode(code);
    //const allCodes = codes.filter((code, i) => console.log(code, i, index));
    //let filterCodes = codes.filter((codeItem) => codeItem !== code);

    // let filterCodes = codes.filter((code, i) => code !== codeP);
    // console.log("filterCodes", filterCodes);

    props.setCodeIndicators({
      ...props.codesIndicators,
      codeActive: index,
    });
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
