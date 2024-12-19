import { Container } from "@mui/material";
import { LoginForm } from "./components";

export const LoginPage = () => (
  <Container
    sx={{
      width: "100vw",
      height: "calc(100vh - 100px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
    <LoginForm />
  </Container>
);

export default LoginPage;
