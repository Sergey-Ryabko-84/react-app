import { useState, MouseEvent } from "react";

type Return = {
  anchorElUser: HTMLElement | null;
  handleOpenUserMenu: (event: MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
};

export const useUserMenu = (): Return => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return {
    anchorElUser,
    handleOpenUserMenu,
    handleCloseUserMenu,
  };
};
