import { useShallowEqualSelector } from "@redux/hooks";

type Return = {
  getNextItemId: () => string;
};

export const useNextItemId = (): Return => {
  const { items } = useShallowEqualSelector((state) => state.items);

  const getNextItemId = () => {
    const maxId = items.reduce(
      (max, item) => (Number(item.id) > max ? Number(item.id) : max),
      0
    );

    return (maxId + 1).toString();
  };
  return { getNextItemId };
};
