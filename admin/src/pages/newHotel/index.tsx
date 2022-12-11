import "./styles.scss";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { hotelInputs } from "../../inputsSource";
import axios from "axios";
import useFetch from "../../hooks/useFeach";
import { RoomType } from "../../interfaces/type";
import { useLocation } from "react-router-dom";
type Props = {
  type: "EDIT" | "NEW";
};
const NewHotel = (Props: Props) => {
  let { type } = Props;
  let location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log("🚀 ~ file: index.tsx:17 ~ NewHotel ~ id", id);
  const [files, setFiles] = useState<any>("");
  const [info, setInfo] = useState<any>({});
  console.log("🚀 ~ file: index.tsx:20 ~ NewHotel ~ info", info);
  const [rooms, setRooms] = useState<any>();
  const { data, loading, error } = useFetch("http://localhost:3005/api/rooms/");
  const {
    data: dataf,
    loading: loadingf,
    error: arrorf,
  } = useFetch(`http://localhost:3005/api/hotels/find/${id}`);

  useEffect(() => {
    setInfo({ ...dataf } ? { ...dataf } : {});
  }, [dataf]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInfo((prev: any) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e: any) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option: any) => option.value
    );
    setRooms(value);
  };

  const handleClick = async (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();

    try {
      const list = await Promise.all(
        Object.values(files).map(async (file: any) => {
          const data = new FormData();

          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dikhy00az/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newhotel = {
        ...info,
        rooms,
        photos: list,
      };
      if (type === "EDIT") {
        await axios.put(`http://localhost:3005/api/hotels/${id}`, newhotel);
      } else {
        await axios.post("http://localhost:3005/api/hotels", newhotel);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="new">
      <div className="top">
        <h1>Add New Product</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              files
                ? URL.createObjectURL(files[0])
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                multiple
                onChange={(e: any) => setFiles(e.target.files)}
                style={{ display: "none" }}
              />
            </div>

            {hotelInputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input
                  id={input.id}
                  onChange={handleChange}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={info[input.id]}
                />
              </div>
            ))}
            <div className="formInput">
              <label>Featured</label>
              <select id="featured" onChange={handleChange}>
                <option value={`${false}`}>No</option>
                <option value={`${true}`}>Yes</option>
              </select>
            </div>
            <div className="selectRooms">
              <label>Rooms</label>
              <select id="rooms" multiple onChange={handleSelect}>
                {loading
                  ? "loading"
                  : data &&
                    data.map((room: RoomType) => (
                      <option key={room._id} value={room._id}>
                        {room.title}
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

export default NewHotel;
