import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
};

export const DialogHeader = ({ title }: Props) => (
  <Box mb={4}>
    <Typography variant="h4" fontSize={18} fontWeight={700} textAlign="center">
      {title}
    </Typography>
  </Box>
);
