import { screen, fireEvent, waitFor } from "@testing-library/react";
import { renderWithProvider } from "@/test-utils";
import LoginPage from "@features/auth/LoginPage";

describe("LoginPage", () => {
  it("should render LoginForm correctly", () => {
    renderWithProvider(<LoginPage />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("should display error message when email is invalid", async () => {
    renderWithProvider(<LoginPage />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: /log in/i });

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Not a valid email")).toBeInTheDocument();
    });
  });
});
