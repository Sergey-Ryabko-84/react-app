import { BrowserRouter } from "react-router-dom";
import { Router } from "@routes";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Router />
    </BrowserRouter>
  );
}

export default App;
