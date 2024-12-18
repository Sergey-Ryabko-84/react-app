import { Route, Routes } from "react-router-dom";
import { LoginPage } from "@features/auth";

export const Router = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/items" element={<>ItemsPage</>} />
  </Routes>
);
