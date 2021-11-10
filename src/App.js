import React, { useState } from "react";
import { Context } from "./context/Context";
import { CSSTransition } from "react-transition-group";
import BarChart from "./components/BarChart/BarChart";
import Indicators from "./components/Indicators/Indicators";
import Purchases from "./components/Purchases/Purchases";
import "./styles/App.css";

const App = () => {
  const nodeRefChart = React.useRef();
  const nodeRefIndicators = React.useRef();
  const nodeRefPurhcases = React.useRef();

  const [statusVisible, setStatusVisible] = useState({
    chart: true,
    indicators: false,
    purchases: false,
  });

  const chartData = [
    { stage: "Announcement", value: 3, average: 2 },
    { stage: "Clarification", value: 3, average: 4 },
    { stage: "Qualification", value: 3, average: 5 },
    { stage: "Tendering", value: 3, average: 7 },
    { stage: "Evaluation", value: 3, average: 2 },
    { stage: "Awarding", value: 3, average: 5 },
    { stage: "Contracting", value: 3, average: 6 },
  ];

  const [indicatorsData, setIndicatorsData] = useState(null);

  const [purchaseData, setPurchaseData] = useState(null);

  const [labelsIndicators, setLabelIndicators] = useState({
    labels: [{ id: "", label: "" }],
    labelActive: "",
  });
  const [codesIndicators, setCodeIndicators] = useState({
    codes: [{ id: "", code: "" }],
    codeActive: "",
  });

  //const [labelActive, setLabelActive] = useState(null);

  return (
    <div className="App">
      <CSSTransition
        in={statusVisible.chart}
        timeout={1000}
        classNames="app__block"
        nodeRef={nodeRefChart}
        unmountOnExit
      >
        <Context.Provider
          value={[
            setIndicatorsData,
            statusVisible,
            setStatusVisible,
            labelsIndicators,
            setLabelIndicators,
          ]}
        >
          <div ref={nodeRefChart}>
            {statusVisible.chart && <BarChart chartdata={chartData} />}
          </div>
        </Context.Provider>
      </CSSTransition>

      <CSSTransition
        in={statusVisible.indicators}
        timeout={1000}
        classNames="app__block"
        nodeRef={nodeRefIndicators}
        unmountOnExit
      >
        <Context.Provider
          value={[
            indicatorsData,
            setIndicatorsData,
            purchaseData,
            setPurchaseData,
            statusVisible,
            setStatusVisible,
            labelsIndicators,
            setLabelIndicators,
            codesIndicators,
            setCodeIndicators,
          ]}
        >
          <div ref={nodeRefIndicators}>
            {statusVisible.indicators && <Indicators />}
          </div>
        </Context.Provider>
      </CSSTransition>

      <CSSTransition
        in={statusVisible.purchases}
        timeout={1000}
        classNames="app__block"
        nodeRef={nodeRefPurhcases}
        unmountOnExit
      >
        <Context.Provider
          value={[
            purchaseData,
            setPurchaseData,
            statusVisible,
            setStatusVisible,
            codesIndicators,
            setCodeIndicators,
          ]}
        >
          <div ref={nodeRefPurhcases}>
            {statusVisible.purchases && <Purchases />}
          </div>
        </Context.Provider>
      </CSSTransition>
    </div>
  );
};

export default App;
