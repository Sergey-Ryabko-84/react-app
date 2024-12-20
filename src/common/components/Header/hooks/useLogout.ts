import { authActions } from "@redux/modules";
import { useActions } from "@redux/hooks";

type Return = {
  handleLogOut: () => void;
};

export const useLogout = (): Return => {
  const useAuthActions = () => useActions(authActions);
  const { logout } = useAuthActions();

  const handleLogOut = () => logout();

  return {
    handleLogOut,
  };
};
