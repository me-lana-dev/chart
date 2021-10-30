import React from "react";

const IndicatorsRow = (props) => {
  const indicatorsData = props.indicatorsData;

  return indicatorsData.map((indicator) => {
    //console.log(indicator);
    return (
      <tr key={indicator.code}>
        <td>{indicator.code}</td>
        <td>{indicator.description}</td>
        <td>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              props.setStatusVisible({
                chart: false,
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
