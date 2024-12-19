import * as yup from "yup";

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i;

export const defaultFormValues = {
  email: "",
  password: "",
};

export const validationSchema = yup.object({
  email: yup
    .string()
    .matches(EMAIL_REGEX, "Not a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
