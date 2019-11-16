import React, { Component } from "react";
import "./App.css";
import MyPieChart from "./mycomponents/MyPieChart";

class App extends Component {
  state = {
    Co2Emission: [],
    indexYear1: 0,
    indexYear2: 0,
    indexYear3: 0
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      Co2Emission: data
    });
  }
  handleYearFilter = (chartName, Year) => {
    let index = this.state.Co2Emission.findIndex(
      co2 => co2.Year === parseInt(Year)
    );
    if (index !== -1) {
      switch (chartName) {
        case "Pie1":
          this.setState({ indexYear1: index });
          break;
        case "Pie2":
          this.setState({ indexYear2: index });
          break;
        case "Pie3":
          this.setState({ indexYear3: index });
          break;
      }
    } else {
      alert("Year could not be found.");
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Global CO2 Emission</h1>
        <MyPieChart
          chartName="Pie1"
          Co2Emission={this.state.Co2Emission[this.state.indexYear1]}
          onYearFilter={this.handleYearFilter}
        />
        <MyPieChart
          chartName="Pie2"
          Co2Emission={this.state.Co2Emission[this.state.indexYear2]}
          onYearFilter={this.handleYearFilter}
        />
        <MyPieChart
          chartName="Pie3"
          Co2Emission={this.state.Co2Emission[this.state.indexYear3]}
          onYearFilter={this.handleYearFilter}
        />
      </div>
    );
  }
}

export default App;
