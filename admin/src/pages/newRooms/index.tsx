import "./styles.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from "../../inputsSource";
import useFetch from "../../hooks/useFeach";
import axios from "axios";
import { HotelsRowsType, RoomType } from "../../interfaces/type";

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState<any>([]);

  const { data, loading, error } = useFetch("http://localhost:3005/api/hotels");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    const roomNumbers = rooms
      .split(",")
      .map((room: RoomType) => ({ number: room }));
    try {
      await axios.post(`http://localhost:3005/api/rooms/${hotelId}`, {
        ...info,
        roomNumbers,
      });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info);
  return (
    <div className="new">
      <div className="top">
        <h1>Add New Room</h1>
      </div>
      <div className="bottom">
        <div className="right">
          <form>
            {roomInputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="formInput">
              <label>Rooms</label>
              <textarea
                onChange={(e) => setRooms(e.target.value)}
                placeholder="give comma between room numbers."
              />
            </div>
            <div className="formInput">
              <label>Choose a hotel</label>
              <select
                id="hotelId"
                onChange={(e: any) => setHotelId(e.target.value)}
              >
                {loading
                  ? "loading"
                  : data &&
                    data.map((hotel: HotelsRowsType) => (
                      <option key={hotel._id} value={hotel._id}>
                        {hotel.name}
                      </option>
                    ))}
              </select>
            </div>
            <button onClick={handleClick}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
