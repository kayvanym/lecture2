import React, { Component } from "react";
import { PieChart, Pie, Sector, Cell, Legend } from "recharts";
import { blockStatement } from "@babel/types";

export default class MyPieChart extends Component {
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

    const dataPieChart = [
      { name: "Gas Fuel", value: parseInt(co2["Gas Fuel"]) },
      { name: "Liquid Fuel", value: co2["Liquid Fuel"] },
      { name: "Solid Fuel", value: co2["Solid Fuel"] },
      { name: "Cement", value: co2["Cement"] }
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
        <PieChart width={350} height={400}>
          <Pie
            data={dataPieChart}
            dataKey="value"
            cx={150}
            cy={150}
            outerRadius={90}
            fill="#82ca9d"
            label
          >
            <Cell fill={COLORS[0]} />)
            <Cell fill={COLORS[1]} />)
            <Cell fill={COLORS[2]} />)
            <Cell fill={COLORS[3]} />)
            <Cell fill={COLORS[4]} />)
          </Pie>
          <Legend layout="vertical" />
        </PieChart>
      </div>
    );
  }
}

//export default Table;
