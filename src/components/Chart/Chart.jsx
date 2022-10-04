import React from "react";

import CharBar from "./CharBar.jsx";
import "./Chart.css";

const Chart = (props) => {
  const dataPoints = props.dataPoints.map((dataPoint) => (
    <CharBar
      key={dataPoint.label}
      value={dataPoint.value}
      maxValue={null}
      label={dataPoint.label}
    />
  ));

  return <div className="chart">{}</div>;
};

export default Chart;
