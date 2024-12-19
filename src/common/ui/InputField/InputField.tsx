import TextField, { TextFieldProps } from "@mui/material/TextField";
import { getIn, useFormikContext } from "formik";

type Props<T> = Omit<TextFieldProps, "name" | "label"> & {
  name: Extract<keyof T, string>;
  label?: string;
};

export const InputField = <T,>({ name, label, ...props }: Props<T>) => {
  const formik = useFormikContext<T>();

  const value = getIn(formik.values, name);
  const error = getIn(formik.errors, name);
  const touched = getIn(formik.touched, name);

  return (
    <TextField
      name={name}
      label={label}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={value ?? ""}
      error={touched && Boolean(error)}
      helperText={touched && error && String(error)}
      {...props}
    />
  );
};
