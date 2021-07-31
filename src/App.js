import React from "react";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }
  render() {
    const { data } = this.state;
    console.log(data);

    return (
      <div className={styles.container}>
        <h1>Covid Tracker for India</h1>
        <Cards data={data} />
        <Charts />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
