import DataTable from "../../components/DataTable";

import "./styles.scss";
import { roomColumns } from "../../dataSourse";

const Rooms = () => {
  return (
    <div className="rooms">
      <DataTable columns={roomColumns} title="room" />
    </div>
  );
};

export default Rooms;
