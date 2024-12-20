import { FormikHelpers, useFormik } from "formik";
import { useActions } from "@redux/hooks";
import { itemsActions } from "@redux/modules";
import { ItemType } from "@redux/modules/items/types";
import { ItemFormType } from "../types";
import { defaultFormValues, validationSchema } from "../formUtils";
import { useNextItemId } from "./useNextItemId";

export const useItemForm = (
  handleClose: () => void,
  setSubmitError: React.Dispatch<React.SetStateAction<string | null>>,
  itemData?: ItemType
) => {
  const useAuthActions = () => useActions(itemsActions);
  const { addItem, updateItem } = useAuthActions();

  const { getNextItemId } = useNextItemId();

  const handleSubmit = (
    { id, name, price }: ItemFormType,
    { setSubmitting, resetForm }: FormikHelpers<ItemFormType>
  ) => {
    try {
      if (id) {
        updateItem({ id, name, price: Number(price) });
      } else {
        addItem({ id: getNextItemId(), name, price: Number(price) });
      }
      resetForm();
      handleClose();
    } catch (error) {
      console.log("error", error);
      setSubmitError("An error occurred while saving the item.");
    } finally {
      setSubmitting(false);
    }
  };

  const initialValues = {
    ...defaultFormValues,
    ...itemData,
  };

  const formik = useFormik<ItemFormType>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return formik;
};
