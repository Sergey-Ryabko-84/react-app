import { GridColDef } from "@mui/x-data-grid";
import { ItemType } from "@redux/modules/items/types";
import { ActionsCell } from "../ActionsCell";

export const columnsConfig: GridColDef<ItemType>[] = [
  {
    field: "id",
    headerName: "id",
    flex: 0.1,
    headerAlign: "left",
    align: "left",
    disableColumnMenu: true,
  },
  {
    field: "name",
    headerName: "name",
    flex: 0.5,
    headerAlign: "left",
    align: "left",
    disableColumnMenu: true,
  },
  {
    field: "price",
    headerName: "price",
    flex: 0.2,
    headerAlign: "left",
    align: "left",
    disableColumnMenu: true,
    valueFormatter: (_value, row) => `$${row.price.toFixed(2)}`,
  },
  {
    field: "actions",
    headerName: "actions",
    flex: 0.2,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    renderCell: ({ row }) => <ActionsCell item={row} />,
  },
];
