import { useRoutes } from "react-router-dom";

import { useRouteMap } from "@layouts/hooks/useRouteMap";

export const Router = () => {
  // Get various routes configurations
  const { PrivateRoutes, AuthRoutes } = useRouteMap();

  // Generate the routes
  const routing = useRoutes([PrivateRoutes, AuthRoutes]);

  return routing;
};
