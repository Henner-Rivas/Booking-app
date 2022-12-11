import { Link, useLocation } from "react-router-dom";
import "./styles.scss";
import Chart from "../../components/chart";
import List from "../../components/Table";
import useFetch from "../../hooks/useFeach";
import { useState, useEffect } from "react";
import { HotelsRowsType } from "../../interfaces/type";

const hotelDetails = () => {
  const location = useLocation();
  const [hotel, setHotel] = useState<HotelsRowsType | any>();

  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(
    `http://localhost:3005/api/hotels/find/${id}`
  );

  useEffect(() => {
    if (data) {
      setHotel(data);
    }
  }, [data]);

  return (
    <div className="hotels">
      <div className="top">
        <div className="left">
          <Link to="edit">
            <div className="editButton">Edit</div>
          </Link>
          <h1 className="title">Information</h1>
          <div className="item">
            {hotel?.photos?.map((e: string) => (
              <img
                className="itemImg"
                src={e ? e : "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
              />
            ))}

            <div className="details">
              <h1 className="itemTitle">{hotel?.name}</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">{hotel?.title}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">{hotel?.type}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Elton St. 234</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">City:</span>
                <span className="itemValue"> {hotel?.city}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <Chart aspect={3 / 1} title="hotel Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <List />
      </div>
    </div>
  );
};

export default hotelDetails;
