import { useLocation } from "react-router-dom";
import "./styles.scss";
import Chart from "../../components/chart";
import List from "../../components/Table";
import useFetch from "../../hooks/useFeach";
import { userRowsType } from "../../interfaces/type";
import { useState, useEffect } from "react";

const UserDetails = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(
    `http://localhost:3005/api/users/${id}`
  );

  return (
    <div className="users">
      <div className="top">
        {data.map((user: userRowsType) => (
          <div className="left" key={user._id}>
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elton St. 234</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue"> {user.country}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="right">
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <List />
      </div>
    </div>
  );
};

export default UserDetails;
