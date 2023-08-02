export const findInputError = (errors, name) => {
  const filter = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((curr, key) => {
      return Object.assign(curr, { error: errors[key] });
    }, {});
  return filter;
};

export const isInputValid = (inputError) =>
  Object.keys(inputError).length === 0;
