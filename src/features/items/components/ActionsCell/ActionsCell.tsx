import Stack from "@mui/material/Stack";
import { ItemType } from "@redux/modules/items/types";
import { EditItem } from "./EditItem";
import { DeleteItem } from "./DeleteItem";

type Props = {
  item: ItemType;
};

export const ActionsCell = ({ item }: Props) => {
  return (
    <Stack
      direction="row"
      height="100%"
      alignItems="center"
      justifyContent="space-around">
      <EditItem item={item} />
      <DeleteItem item={item} />
    </Stack>
  );
};
