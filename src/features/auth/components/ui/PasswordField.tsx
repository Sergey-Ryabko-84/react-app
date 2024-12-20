import { useState } from "react";
import { TextFieldProps } from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputField } from "@common/ui";

type Props<T> = Omit<TextFieldProps, "name"> & {
  name: Extract<keyof T, string>;
  label?: string;
};

export const PasswordField = <T,>({
  name,
  label = "Password",
  ...props
}: Props<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputField
      name={name}
      label={label}
      type={showPassword ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((prev) => !prev)}
              edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          ),
        },
      }}
      {...props}
    />
  );
};
