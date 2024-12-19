import { useFormikContext } from "formik";
import Button, { ButtonProps } from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const SubmitButton = styled(({ children, ...props }: ButtonProps) => {
  const { isSubmitting } = useFormikContext();

  return (
    <Button
      fullWidth
      type="submit"
      variant="contained"
      disabled={isSubmitting}
      {...props}>
      <Typography variant="button" textTransform="initial" fontWeight={700}>
        {children}
      </Typography>
    </Button>
  );
})(() => ({ height: "56px" }));
