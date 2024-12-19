import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type AuthGuardProps = {
  hasAccess?: boolean;
  redirectRoute: string;
  children: ReactNode;
};

export const AuthGuard = ({
  hasAccess = false,
  redirectRoute,
  children,
}: AuthGuardProps) => {
  if (!hasAccess) {
    return <Navigate to={redirectRoute} replace />;
  }

  return <>{children}</>;
};
