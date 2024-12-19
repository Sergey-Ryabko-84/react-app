import Stack from "@mui/material/Stack";
import { FormikProvider } from "formik";
import { InputField } from "@common/ui";

import { PasswordField, SubmitButton } from "../ui";
import { useLogin } from "../../hooks";

export const LoginForm = () => {
  const formik = useLogin();

  return (
    <FormikProvider value={formik}>
      <Stack component="form" onSubmit={formik.handleSubmit} gap={4} noValidate>
        <InputField name="email" label="Email" type="email" />
        <PasswordField name="password" />
        <SubmitButton>Log in</SubmitButton>
      </Stack>
    </FormikProvider>
  );
};
