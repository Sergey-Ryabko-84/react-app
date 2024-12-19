import { Container } from "@mui/material";
import { Items } from "./components";

const ItemsPage = () => (
  <Container
    sx={{
      height: "calc(100vh - 70px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
    <Items />
  </Container>
);

export default ItemsPage;
