import { styled } from "@mui/material";
import { DataGrid as DataGridMui, DataGridProps } from "@mui/x-data-grid";

export const DataGrid = styled(DataGridMui)<DataGridProps>(() => ({
  // Apply styles to the root container
  "&.MuiDataGrid-root": {
    minWidth: "460px",
  },

  // Apply styles to the cells in header
  "& .MuiDataGrid-columnHeader": {
    padding: "0 16px",
    textTransform: "uppercase",
    "&:focus, &:focus-within": { outline: "none" },
  },

  // Apply styles to the rows
  "& .MuiDataGrid-row": {
    fontSize: 13,
    fontWeight: 600,
    "&:nth-of-type(even)": { backgroundColor: "#f9f9f9" },
    "&:hover": { backgroundColor: "#ebebeb" },
  },

  // Apply styles to the cells
  "& .MuiDataGrid-cell": {
    padding: "0 16px",
    "&:focus, &:focus-within": { outline: "none" },
  },
}));
