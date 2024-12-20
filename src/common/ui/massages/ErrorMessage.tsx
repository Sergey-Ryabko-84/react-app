import { Typography } from "@mui/material";

type Props = {
  message: string;
};

export const ErrorMessage = ({ message }: Props) => (
  <Typography variant="caption" color="error" textAlign="center">
    {message}
  </Typography>
);
