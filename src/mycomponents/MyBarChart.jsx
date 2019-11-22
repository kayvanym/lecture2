import React, { Component } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class MyBarChart extends Component {
  handleYear = e => {
    if (e.key === "Enter") {
      //this.setState({ yearFrom: e.target.value });
      this.props.onYearFilter(this.props.chartName, e.target.value);
      console.log(e.target.value);
    }
  };
  render() {
    //let { allPers } = this.props;
    let co2 = this.props.Co2Emission;
    if (co2 === undefined) return <p>There is no data.</p>;

    const dataBarChart = [
      { name: "Gas", CO2: parseInt(co2["Gas Fuel"]) },
      { name: "Liq", CO2: co2["Liquid Fuel"] },
      { name: "Sol", CO2: co2["Solid Fuel"] },
      { name: "Cem", CO2: co2["Cement"] }
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#BB8042"];

    console.log(co2);

    return (
      <div style={{ width: "350px", height: "400px", float: "left" }}>
        <input
          type="text"
          placeholder="Year..."
          onKeyDown={e => this.handleYear(e)}
        />

        <BarChart
          width={350}
          height={400}
          data={dataBarChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />

          <Bar dataKey="CO2" fill="#8884d8">
            <Cell fill={COLORS[0]} />)
            <Cell fill={COLORS[1]} />)
            <Cell fill={COLORS[2]} />)
            <Cell fill={COLORS[3]} />)
            <Cell fill={COLORS[4]} />)
          </Bar>
        </BarChart>
      </div>
    );
  }
}

//export default Table;
