import React, { useState } from "react";
import { Context } from "./context/Context";
import BarChart from "./components/BarChart/BarChart";
import Indicators from "./components/Indicators/Indicators";
import Purchases from "./components/Purchases/Purchases";
import "./styles/App.css";
import { CSSTransition } from "react-transition-group";

const App = () => {
  // const nodeRef = useRef(null);
  const [statusVisible, setStatusVisible] = useState({
    chart: true,
    indicators: false,
    purchases: false,
  });

  console.log(statusVisible);

  //console.log(statusVisible.chart);

  let chartData = [
    { stage: "Announcement", value: 3, average: 2 },
    { stage: "Clarification", value: 3, average: 4 },
    { stage: "Qualification", value: 3, average: 5 },
    { stage: "Tendering", value: 3, average: 7 },
    { stage: "Evaluation", value: 3, average: 2 },
    { stage: "Awarding", value: 3, average: 5 },
    { stage: "Contracting", value: 3, average: 6 },
  ];

  let [indicatorsData, setIndicatorsData] = useState([
    {
      code: "RI-PS-001",
      description:
        "Short or inadequate notice to bidders to submit expressions of interest or bids",
      cases: 2,
    },
    {
      code: "RI-PS-003",
      description: "Splitting purchases to avoid procurement thresholds",
      cases: 1,
    },
    {
      code: "RI-PS-005",
      description:
        "Direct awards in contravention to the provisions of the procurement plan",
      cases: 7,
    },
  ]);

  let [purchaseData, setPurchaseData] = useState([
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

  console.log(setPurchaseData);

  return (
    <div className="App">
      <CSSTransition
        in={statusVisible.chart}
        timeout={1000}
        classNames="app__block"
        // nodeRef={nodeRef}
        unmountOnExit
      >
        <Context.Provider
          value={[
            chartData,
            setIndicatorsData,
            statusVisible,
            setStatusVisible,
          ]}
        >
          {statusVisible.chart && <BarChart />}
        </Context.Provider>
      </CSSTransition>

      <CSSTransition
        in={statusVisible.indicators}
        timeout={1000}
        classNames="app__block"
        // nodeRef={nodeRef}
        unmountOnExit
      >
        <Context.Provider
          value={[indicatorsData, statusVisible, setStatusVisible]}
        >
          {statusVisible.indicators && <Indicators />}
        </Context.Provider>
      </CSSTransition>

      <CSSTransition
        in={statusVisible.purchases}
        timeout={1000}
        classNames="app__block"
        // nodeRef={nodeRef}
        unmountOnExit
      >
        <Context.Provider
          value={[purchaseData, statusVisible, setStatusVisible]}
        >
          {statusVisible.purchases && <Purchases />}
        </Context.Provider>
      </CSSTransition>
    </div>
  );
};

export default App;
