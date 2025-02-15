import { Container } from "@mui/material";
import { LoginForm } from "./components";

const LoginPage = () => (
  <Container
    sx={{
      height: "calc(100vh - 70px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
    <LoginForm />
  </Container>
);

export default LoginPage;
