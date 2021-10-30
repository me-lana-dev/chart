import React from "react";

const PurchasesRow = (props) => {
  const purchaseData = props.purchaseData;

  return purchaseData.map((purchase) => {
    return (
      <tr key={purchase.code}>
        <td>
          <a href="/">{purchase.ocid}</a>
        </td>
        <td>{purchase.procurementMethodDetail}</td>
        <td>{purchase.classification}</td>
        <td>{purchase.estematedValue}</td>
        <td>{purchase.status}</td>
      </tr>
    );
  });
};

export default PurchasesRow;
