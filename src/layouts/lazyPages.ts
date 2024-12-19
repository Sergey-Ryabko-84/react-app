import { lazy } from "react";

export const ItemsPage = lazy(() => import("@features/items/ItemsPage"));
export const LoginPage = lazy(() => import("@features/auth/LoginPage"));
