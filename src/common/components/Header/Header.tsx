import Stack from "@mui/material/Stack";
import { Profile } from "./components";
import { PaperWrapper } from "@common/ui";

export const Header = () => (
  <PaperWrapper component="nav" sx={{ py: 2 }}>
    <Stack alignItems="flex-end" justifyContent="center">
      <Profile />
    </Stack>
  </PaperWrapper>
);

export default Header;
