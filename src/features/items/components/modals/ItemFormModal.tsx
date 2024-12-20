import { useState } from "react";
import { FormikProvider } from "formik";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import { DialogHeader, ErrorMessage, InputField } from "@common/ui";
import { ItemType } from "@redux/modules/items/types";
import { useItemForm } from "../../hooks";
import { PriceField } from "../ui";

type Props = {
  handleClose: () => void;
  item?: ItemType;
};

export const ItemFormModal = ({ handleClose, item }: Props) => {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formik = useItemForm(handleClose, setSubmitError, item);
  const actionName = formik.values.id ? "Edit" : "Add";

  return (
    <DialogContent sx={{ p: 6 }}>
      <DialogHeader title={`${actionName} Item`} />

      <FormikProvider value={formik}>
        <Stack
          component="form"
          onSubmit={formik.handleSubmit}
          justifyContent="center"
          gap={3}>
          <Stack gap={2}>
            <InputField name="name" label="Name" size="small" />
            <PriceField name="price" size="small" />
          </Stack>

          {submitError && <ErrorMessage message={submitError} />}

          <Stack direction="row" gap={2}>
            <Button variant="contained" type="submit" color="success" fullWidth>
              {`${actionName} item`}
            </Button>
            <Button variant="contained" onClick={handleClose} fullWidth>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </FormikProvider>
    </DialogContent>
  );
};
