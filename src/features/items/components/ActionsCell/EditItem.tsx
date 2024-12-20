import IconButton from "@mui/material/IconButton";
import { Dialog, useDialog } from "@common/ui";
import { ItemType } from "@redux/modules/items/types";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { ItemFormModal } from "../modals";
import { Tooltip } from "@mui/material";

type Props = {
  item: ItemType;
};

export const EditItem = ({ item }: Props) => {
  const { isOpenDialog, handleDialogOpen, handleDialogClose } = useDialog();

  return (
    <>
      <Tooltip title="Edit item">
        <IconButton onClick={handleDialogOpen} sx={{ width: 36, height: 36 }}>
          <EditNoteIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={isOpenDialog} onClose={handleDialogClose}>
        <ItemFormModal handleClose={handleDialogClose} item={item} />
      </Dialog>
    </>
  );
};
