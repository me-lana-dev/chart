import React from "react";

const IndicatorsRow = (props) => {
  const indicatorsData = props.indicatorsData;

  //console.log(props.codesIndicators);

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

  const getParametrsSelect = (params) => {
    const labels = [];
    params.map((x, index) => {
      return labels.push({
        id: index,
        code: x,
      });
    });
    return labels;
  };

  const openPurchase = (e, index) => {
    e.preventDefault();
    //console.log(indicatorsCodes, index);

    const codesSelect = getParametrsSelect(indicatorsCodes);
    //console.log("codesSelect", codesSelect);

    props.setCodeIndicators({
      codes: codesSelect,
      codeActive: index,
    });
    //console.log(props.codesIndicators);

    //console.log(props.codesIndicators);
    // props.setCodeIndicators({
    //   ...props.codesIndicators,
    //   codes: props.indicatorsCodes,
    //   codeActive: index,
    // });
    //console.log(props.codesIndicators);

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
  };

  return indicatorsData.map((indicator, index) => {
    // console.log(index);
    return (
      <tr key={indicator.code}>
        <td>{indicator.code}</td>
        <td>{indicator.description}</td>
        <td>
          <a href="/" onClick={(e) => openPurchase(e, index)}>
            {indicator.cases}
          </a>
        </td>
      </tr>
    );
  });
};

export default IndicatorsRow;
