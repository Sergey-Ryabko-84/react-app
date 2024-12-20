import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Dialog, useDialog } from "@common/ui";
import { ItemType } from "@redux/modules/items/types";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DeleteItemModal } from "../modals";

type Props = {
  item: ItemType;
};

export const DeleteItem = ({ item }: Props) => {
  const { isOpenDialog, handleDialogOpen, handleDialogClose } = useDialog();

  return (
    <>
      <Tooltip title="Delete item">
        <IconButton onClick={handleDialogOpen} sx={{ width: 36, height: 36 }}>
          <DeleteOutlineIcon />
        </IconButton>
      </Tooltip>

      <Dialog open={isOpenDialog} onClose={handleDialogClose}>
        <DeleteItemModal handleClose={handleDialogClose} item={item} />
      </Dialog>
    </>
  );
};
