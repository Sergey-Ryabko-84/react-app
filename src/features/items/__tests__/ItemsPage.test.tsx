import { screen } from "@testing-library/react";
import { renderWithProvider } from "@/test-utils";
import { mockItems } from "@common/mockItems";
import ItemsPage from "@features/items/ItemsPage";

jest.mock("@redux/hooks", () => ({
  useShallowEqualSelector: jest.fn().mockReturnValue({
    items: mockItems,
  }),
}));

describe("ItemsPage", () => {
  it("should render items correctly", () => {
    renderWithProvider(<ItemsPage />);

    mockItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });

    mockItems.forEach((item) => {
      expect(screen.getByText(`$${item.price.toFixed(2)}`)).toBeInTheDocument();
    });
  });

  it("should render the table with the correct number of rows", () => {
    renderWithProvider(<ItemsPage />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(mockItems.length + 1);
  });
});
