import { TextFieldProps } from "@mui/material/TextField";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { InputField } from "@common/ui";

type Props<T> = Omit<TextFieldProps, "name"> & {
  name: Extract<keyof T, string>;
  label?: string;
};

export const PriceField = <T,>({
  name,
  label = "Price",
  ...props
}: Props<T>) => (
  <InputField
    name={name}
    label={label}
    type="number"
    slotProps={{
      input: {
        startAdornment: (
          <AttachMoneyIcon sx={{ fontSize: 18, ml: -0.5, mr: 1 }} />
        ),
      },
    }}
    {...props}
  />
);
