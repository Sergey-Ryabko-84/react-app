import { ItemsPage, LoginPage } from "./lazyPages";

type RouteType = {
  path: string;
  element: React.ReactElement;
};

export const PRIVATE_ROUTES: Record<string, RouteType> = {
  items: { path: "/items", element: <ItemsPage /> },
};

export const AUTH_ROUTES: Record<string, RouteType> = {
  login: { path: "/login", element: <LoginPage /> },
};
