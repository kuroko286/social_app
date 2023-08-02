import { findInputError, isInputValid } from "@/utils/checkInputError";
export const useFieldError = (formError, inputName) => {
  const inputError = findInputError(formError, inputName);
  const isValid = isInputValid(inputError);

  return { isValid, message: inputError.error?.message || "" };
};
