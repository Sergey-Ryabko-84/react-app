import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type AuthGuardProps = {
  isAuthenticated?: boolean;
  redirectRoute: string;
  children: ReactNode;
};

export const AuthGuard = ({
  isAuthenticated = false,
  redirectRoute,
  children,
}: AuthGuardProps) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectRoute} replace />;
  }

  return <>{children}</>;
};
