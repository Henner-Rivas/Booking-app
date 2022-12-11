import { useLocation } from "react-router-dom";
import "./styles.scss";
import Chart from "../../components/chart";
import List from "../../components/Table";
import useFetch from "../../hooks/useFeach";
import { userRowsType } from "../../interfaces/type";
import { useState, useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import Modal from "../Modal";
import axios from "axios";

const UserDetails = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const [user, setUser] = useState<any>();
  console.log("🚀 ~ file: index.tsx:12 ~ UserDetails ~ user", user);
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(
    `http://localhost:3005/api/users/${id}`
  );

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const handleEditForm = async () => {
    await axios.put(`http://localhost:3005/api/users/${id}`, user);
  };
  const handleOnchangeForm = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="datail">
      <div className="top">
        <div className="left">
          <div className="editButton" onClick={openModal}>
            Edit
          </div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src={user?.img} alt="" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">{user?.username}</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">{user?.email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">{user?.phone}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Elton St. 234</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue"> {user?.country}</span>
              </div>
            </div>
          </div>

          <Modal isOpen={isOpen} closeModal={closeModal}>
            <h2 className="title-form"> Edit user</h2>

            <div className="item-form">
              <label htmlFor="username">Usermane</label>
              <input
                type="text"
                placeholder="name"
                name="username"
                value={user?.username}
                onChange={handleOnchangeForm}
              />
            </div>
            <div className="item-form">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={user?.email}
                onChange={handleOnchangeForm}
              />
            </div>
            <div className="item-form">
              <label htmlFor="name">Country</label>
              <input
                type="text"
                placeholder="name"
                name="country"
                value={user?.country}
                onChange={handleOnchangeForm}
              />
            </div>
            <div className="item-form">
              <label htmlFor="name">Images</label>
              <input
                type="text"
                placeholder="name"
                name="img"
                value={user?.img}
                onChange={handleOnchangeForm}
              />
            </div>
            <div className="item-form">
              <label htmlFor="name">City</label>
              <input
                type="text"
                placeholder="name"
                className="city"
                value={user?.city}
                onChange={handleOnchangeForm}
              />
            </div>
            <div className="item-form">
              <label htmlFor="name">Phone</label>
              <input
                type="text"
                placeholder="name"
                className="phone"
                value={user?.phone}
                name="phone"
                onChange={handleOnchangeForm}
              />
            </div>
            <div className="buttons">
              <button type="submit" className="edit" onClick={handleEditForm}>
                {" "}
                Acualizar
              </button>
              <button type="submit" className="calcel" onClick={closeModal}>
                {" "}
                Calcelar
              </button>
            </div>
          </Modal>

          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
