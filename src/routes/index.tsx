import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("@features/auth/LoginPage"));

export const Router = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/items" element={<>ItemsPage</>} />
  </Routes>
);
