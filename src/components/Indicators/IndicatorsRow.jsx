import React from "react";

const IndicatorsRow = (props) => {
  const indicatorsData = props.indicatorsData;

  return indicatorsData.map((indicator) => {
    return (
      <tr key={indicator.code}>
        <td>{indicator.code}</td>
        <td>{indicator.description}</td>
        <td>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              props.setPurchaseData([
                {
                  ocid: "OCDS-B3WDP1-MD-1571837868539",
                  procurementMethodDetail: "Framework execution",
                  classification: "15000000-8",
                  estematedValue: 71555247,
                  status: "active",
                },
                {
                  ocid: "OCDS-B3WDP1-MD-1571837868540",
                  procurementMethodDetail: "Restricted tender",
                  classification: "15000000-9",
                  estematedValue: 1555247,
                  status: "active",
                },
                {
                  ocid: "OCDS-B3WDP1-MD-1571837868539",
                  procurementMethodDetail: "Request for quotation",
                  classification: "15000000-8",
                  estematedValue: 1555247,
                  status: "evaluation",
                },
              ]);
              props.setStatusVisible({
                ...props.setStatusVisible,
                indicators: false,
                purchases: true,
              });
            }}
          >
            {indicator.cases}
          </a>
        </td>
      </tr>
    );
  });
};

export default IndicatorsRow;
