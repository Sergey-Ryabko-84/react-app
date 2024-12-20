import { useActions } from "@redux/hooks";
import { itemsActions } from "@redux/modules";

export const useItemDelete = (
  id: string,
  handleClose: () => void,
  setDeletionError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const useAuthActions = () => useActions(itemsActions);
  const { deleteItem } = useAuthActions();

  const handleDelete = () => {
    try {
      deleteItem(id);
      handleClose();
    } catch (error) {
      console.log("error", error);
      setDeletionError("An error occurred while deleting the item.");
    }
  };

  return { handleDelete };
};
