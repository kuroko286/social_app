export const checkConfirmPassword = (confirmPassword, getValues) => {
  const password = getValues("password");
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
};
