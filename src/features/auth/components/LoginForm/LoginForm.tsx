import { useState } from "react";
import Stack from "@mui/material/Stack";
import { FormikProvider } from "formik";
import { ErrorMessage, InputField } from "@common/ui";

import { PasswordField, SubmitButton } from "../ui";
import { useLogin } from "../../hooks";

export const LoginForm = () => {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formik = useLogin(setSubmitError);

  return (
    <FormikProvider value={formik}>
      <Stack component="form" onSubmit={formik.handleSubmit} gap={4} noValidate>
        {submitError && <ErrorMessage message={submitError} />}
        <InputField name="email" label="Email" type="email" />
        <PasswordField name="password" />
        <SubmitButton>Log in</SubmitButton>
      </Stack>
    </FormikProvider>
  );
};
