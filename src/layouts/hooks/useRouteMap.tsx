import { AuthGuard, AuthLayout, PrivateLayout } from "@layouts";

import { AUTH_ROUTES, PRIVATE_ROUTES } from "../routesConfig";
import { useShallowEqualSelector } from "@redux/hooks";

export const useRouteMap = () => {
  const isLoggedIn = useShallowEqualSelector((state) => state.auth.isLoggedIn);

  const PrivateRoutes = {
    element: (
      <AuthGuard isAuthenticated={isLoggedIn} redirectRoute="/login">
        <PrivateLayout />
      </AuthGuard>
    ),
    children: Object.values(PRIVATE_ROUTES),
  };

  const AuthRoutes = {
    element: (
      <AuthGuard isAuthenticated={!isLoggedIn} redirectRoute="/items">
        <AuthLayout />
      </AuthGuard>
    ),
    children: Object.values(AUTH_ROUTES),
  };

  return {
    PrivateRoutes,
    AuthRoutes,
  };
};
