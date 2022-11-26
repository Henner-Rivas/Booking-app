import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { ParamsDataUser, RoomType, userRowsType } from "../../interfaces/type";
import "./styles.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFeach";
import { useEffect } from "react";
import axios from "axios";

type Props = {
  columns: any;
  title: string;
};
export default function DataTable(props: Props) {
  let { columns, title } = props;
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data, loading, error } = useFetch(
    `http://localhost:3005/api/${path}`
  );
  console.log("data" + data);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:3005/api/${path}/${id}`);
      setList(list?.filter((item: userRowsType) => item._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: ParamsDataUser) => {
        return (
          <div className="cellAction">
            <Link
              to={`/${path}/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 700, width: "100%" }} className="datatable">
      <div className="datatable-title">
        All {title}s
        <Link to={`/${path}/new`} className="link">
          add New {title}
        </Link>
      </div>

      {loading ? (
        <div> Loading</div>
      ) : (
        <DataGrid
          className="datagrid"
          rows={list ? list : []}
          columns={columns.concat(actionColumn)}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowId={(row: any) => row._id}
        />
      )}
    </Box>
  );
}
