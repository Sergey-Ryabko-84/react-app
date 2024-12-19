import { FormikHelpers, useFormik } from "formik";
import { useActions } from "@redux/hooks";
import { authActions } from "@redux/modules/auth";
import { LoginFormType } from "../types";
import { defaultFormValues, validationSchema } from "../formUtils";

export const useLogin = () => {
  const useAuthActions = () => useActions(authActions);
  const { login } = useAuthActions();

  const handleSubmit = async (
    { email, password }: LoginFormType,
    { setSubmitting, resetForm }: FormikHelpers<LoginFormType>
  ) => {
    try {
      login({ email, password });
      resetForm();
    } catch (error) {
      console.log("error", error);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik<LoginFormType>({
    initialValues: defaultFormValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return formik;
};
