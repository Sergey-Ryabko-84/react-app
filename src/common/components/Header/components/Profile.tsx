import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useShallowEqualSelector } from "@redux/hooks";
import { useLogout, useUserMenu } from "../hooks";

export const Profile = () => {
  const { handleLogOut } = useLogout();
  const { anchorElUser, handleOpenUserMenu, handleCloseUserMenu } =
    useUserMenu();
  const email = useShallowEqualSelector((state) => state.auth.user?.email);

  return (
    <Stack direction="row" alignItems="center" gap={3}>
      <Tooltip title="Open menu">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Tooltip>

      <Typography variant="subtitle2" fontWeight={700} noWrap>
        {email}
      </Typography>

      <Menu
        sx={{ mt: "40px" }}
        anchorEl={anchorElUser}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}>
        <MenuItem component={Link} onClick={handleLogOut} to={"/login"}>
          Log out
        </MenuItem>
      </Menu>
    </Stack>
  );
};
