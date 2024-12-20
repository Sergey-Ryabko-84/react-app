import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { Dialog, useDialog } from "@common/ui";
import { ItemFormModal } from "../modals";

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  const { isOpenDialog, handleDialogOpen, handleDialogClose } = useDialog();

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={3}>
        <Typography variant="h5" fontWeight={600}>
          {title}
        </Typography>
        <Button
          variant="contained"
          onClick={handleDialogOpen}
          startIcon={<AddIcon />}>
          Add Item
        </Button>
      </Stack>

      <Dialog open={isOpenDialog} onClose={handleDialogClose}>
        <ItemFormModal handleClose={handleDialogClose} />
      </Dialog>
    </>
  );
};
