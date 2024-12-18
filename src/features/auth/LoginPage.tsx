import { Button, Stack, Typography } from "@mui/material";
import { useActions, useShallowEqualSelector } from "@redux/hooks";
import { authActions } from "@redux/modules/auth";

export const LoginPage = () => {
  const useAuthActions = () => useActions(authActions);
  const { login, logout } = useAuthActions();
  const isLoggedIn = useShallowEqualSelector((state) => state.auth.isLoggedIn);

  const handleLogin = () => {
    login({ email: "test@example.com", password: "123456" });
  };

  return (
    <Stack direction="row" alignItems="center">
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={() => logout()}>Logout</Button>
      <Typography>{isLoggedIn ? "Logged in" : "Not logged in"}</Typography>
    </Stack>
  );
};
