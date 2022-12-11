import { Link, useLocation } from "react-router-dom";
import "./styles.scss";
import Chart from "../../components/chart";
import List from "../../components/Table";
import useFetch from "../../hooks/useFeach";
import { useState, useEffect } from "react";

const RoomDetails = () => {
  const location = useLocation();
  const [room, setRoom] = useState<any>();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(
    `http://localhost:3005/api/rooms/${id}`
  );

  useEffect(() => {
    if (data) {
      setRoom(data);
    }
  }, [data]);

  return (
    <div className="datail">
      <div className="top">
        <div className="left">
          <Link to="edit">
            <div className="editButton">Edit</div>
          </Link>
          <h1 className="title">Information</h1>
          <div className="item">
            <div className="details">
              <h1 className="itemTitle">{room?.title}</h1>
              <div className="detailItem">
                <span className="itemKey">Descrition:</span>
                <span className="itemValue">{room?.desc}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Price:</span>
                <span className="itemValue">{room?.price}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Max people:</span>
                <span className="itemValue">{room?.maxPeople}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <Chart aspect={3 / 1} title="room Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <List />
      </div>
    </div>
  );
};

export default RoomDetails;
