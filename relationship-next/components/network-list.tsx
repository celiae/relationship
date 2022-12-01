import * as React from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

import { MdModeEditOutline, MdOutlineDeleteForever } from "react-icons/md";
import Network from "types/network";
import { LinearProgress } from "@mui/material";

interface Props {
  network: Network[];
}
export default function NetworkList({ network }: Props) {
  const [rows, setRows] = React.useState(network);

  const columns: GridColDef[] = [
    {
      field: "first_name",
      headerName: "First name",
      width: 150,
    },
    { field: "last_name", headerName: "Last name", width: 150 },
    { field: "gender", headerName: "gender", width: 150 },
    { field: "email", headerName: "email", width: 150 },
    { field: "birthday", headerName: "birthday", width: 150 },
    { field: "phone", headerName: "phone", width: 150 },
    { field: "address", headerName: "address", width: 150 },
    { field: "degree", headerName: "degree", width: 150 },
    { field: "qq", headerName: "qq", width: 150 },
    { field: "wechat", headerName: "wechat", width: 150 },
    { field: "relation", headerName: "relation", width: 150 },
  ];

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar, LoadingOverlay: LinearProgress }}
        />
      </div>
    </>
  );
}
