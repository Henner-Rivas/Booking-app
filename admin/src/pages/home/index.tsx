import React from "react";
import Chart from "../../components/chart";
import Featured from "../../components/featured";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";
import Widget from "../../components/widget";
import "./styles.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />

          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>

        <div className="list-container">
          <div className="list-title">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
