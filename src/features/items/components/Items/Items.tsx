import Stack from "@mui/material/Stack";
import { Table } from "@common/ui";
import { useShallowEqualSelector } from "@redux/hooks";
import { columnsConfig } from "./columnsConfig";
import { Header } from "../Header";

export const Items = () => {
  const { items } = useShallowEqualSelector((state) => state.items);

  return (
    <Stack height="calc(100vh - 150px)">
      <Header title="Items" />
      <Table columnsConfig={columnsConfig} rows={items} loading={!items} />
    </Stack>
  );
};
