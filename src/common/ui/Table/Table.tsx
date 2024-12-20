import Box from "@mui/material/Box";
import {
  GridColDef,
  GridPaginationModel,
  GridRowsProp,
} from "@mui/x-data-grid/models";
import { DataGrid } from "./DataGrid";

const PAGINATION_INITIAL_PAGE = 0;
const PAGINATION_INITIAL_PAGE_SIZE = 15;

type Props = {
  columnsConfig: GridColDef[];
  rows: GridRowsProp;
  loading: boolean;
  height?: string;
  paginationModel?: GridPaginationModel;
};

export const Table = ({
  columnsConfig,
  rows,
  loading,
  height = "calc(100vh - 140px)",
  paginationModel = {
    page: PAGINATION_INITIAL_PAGE,
    pageSize: PAGINATION_INITIAL_PAGE_SIZE,
  },
}: Props) => {
  return (
    <Box sx={{ width: "100%", height, overflowX: "auto" }}>
      <DataGrid
        loading={loading}
        pagination
        rows={rows}
        columns={columnsConfig}
        pageSizeOptions={[15, 25, 50, 75]}
        initialState={{ pagination: { paginationModel } }}
        rowSelection={false}
      />
    </Box>
  );
};
