import { ReactNode } from "react";
import DialogMui, { DialogProps } from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = DialogProps & {
  children: ReactNode;
  onClose: () => void;
  iconClose?: boolean;
};

export const DialogWrapper = styled((props: DialogProps) => (
  <DialogMui {...props} />
))(() => ({
  "& .MuiDialog-paper": { width: "100%", maxWidth: 480, borderRadius: "12px" },
}));

export const Dialog = ({ children, onClose, ...props }: Props) => (
  <DialogWrapper onClose={onClose} {...props}>
    <IconButton
      onClick={onClose}
      sx={{ position: "absolute", right: 10, top: 10, color: "#989EB9" }}>
      <CloseIcon />
    </IconButton>
    {children}
  </DialogWrapper>
);
