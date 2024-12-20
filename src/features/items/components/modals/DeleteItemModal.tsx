import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import { DialogHeader, ErrorMessage } from "@common/ui";
import { ItemType } from "@redux/modules/items/types";
import { useItemDelete } from "../../hooks";

type Props = {
  handleClose: () => void;
  item: ItemType;
};

export const DeleteItemModal = ({ handleClose, item }: Props) => {
  const [deletionError, setDeletionError] = useState<string | null>(null);
  const { handleDelete } = useItemDelete(
    item.id,
    handleClose,
    setDeletionError
  );

  return (
    <DialogContent sx={{ p: 6 }}>
      <DialogHeader title={`Are you sure you want to delete ${item?.name}?`} />

      <Stack justifyContent="center" gap={3}>
        {deletionError && <ErrorMessage message={deletionError} />}

        <Stack direction="row" gap={2}>
          <Button
            variant="contained"
            onClick={handleDelete}
            color="error"
            fullWidth>
            Delete Item
          </Button>
          <Button variant="contained" onClick={handleClose} fullWidth>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </DialogContent>
  );
};
