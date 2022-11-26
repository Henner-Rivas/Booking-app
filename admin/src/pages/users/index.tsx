import DataTable from "../../components/DataTable";

import "./styles.scss";
import { userColumns } from "../../dataSourse";

const Users = () => {
  return (
    <div className="users">
      <DataTable columns={userColumns} title="user" />
    </div>
  );
};

export default Users;
