import { Table } from "@common/ui";
import { useShallowEqualSelector } from "@redux/hooks";
import { columnsConfig } from "./columnsConfig";
import { Header } from "../Header";

export const Items = () => {
  const { items } = useShallowEqualSelector((state) => state.items);

  return (
    <>
      <Header title="Items" />
      <Table columnsConfig={columnsConfig} rows={items} loading={!items} />
    </>
  );
};
