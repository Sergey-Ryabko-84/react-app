import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@redux/store";

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

export { renderWithProvider };
