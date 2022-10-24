import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); // creates an array of values por each element on that array
  const totalMaximum = Math.max(...dataPointValues); // recibes 12 arguments from the spread operator

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
