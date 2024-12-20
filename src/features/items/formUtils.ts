import * as yup from "yup";

const DECIMAL_REGEX = /^\d+(\.\d{1,2})?$/;

export const defaultFormValues = {
  name: "",
  price: "",
};

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  price: yup
    .number()
    .min(0.01)
    .test(
      "decimalPrecision",
      "Price must have up to two decimal places",
      function (value) {
        if (value === undefined || value === null) return true;
        return DECIMAL_REGEX.test(value.toString());
      }
    )
    .required("Price is required"),
});
