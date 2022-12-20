import React from "react";
import { Chart } from "react-google-charts";
import "./AreaChart.css";

export const data = [
  ["Year", "Sales"],
  ["Jan", 150],
  ["Feb", 250],
  ["Mar", 150],
  ["Apr", 190],
  ["May", 120],
  ["Jun", 180],
  ["Jul", 170],
  ["Aug", 260],
  ["Sep", 200],
  ["Oct", 240],
  ["Nov", 200],
  ["Dec", 250],
];

export const options = {
  title: "Daily Views",
  legend: { position: "none" },
  vAxis: { minVal: 0, ticks: ["100", "200", "300", "400"] },
};

function AreaChart() {
  return (
    <Chart
      className="chart"
      chartType="AreaChart"
      width="100%"
      height="290px"
      data={ data }
      options={ options }
      legendToggle
    />
  );
}
export default AreaChart
