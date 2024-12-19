import { useShallowEqualSelector } from "@redux/hooks";

export const Items = () => {
  const { items } = useShallowEqualSelector((state) => state.items);

  return (
    <ul>
      {items.map(({ name }) => (
        <li>{name}</li>
      ))}
    </ul>
  );
};
