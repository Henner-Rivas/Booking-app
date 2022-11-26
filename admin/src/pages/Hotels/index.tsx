import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "./styles.scss";
import Users from "../users/index";
import List from "../userDetails/index";
import DataTable from "../../components/DataTable";
import { hotelColumns } from "../../dataSourse";

const Hotels = () => {
  return (
    <div className="Hotels">
      <DataTable columns={hotelColumns} title="hotel" />
    </div>
  );
};

export default Hotels;
