import React, { useContext } from "react";
import { Context } from "../../context/Context";

const PurchasesRow = () => {
  const [purchaseData] = useContext(Context);
  return purchaseData.map((purchase) => {
    return (
      <tr>
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
