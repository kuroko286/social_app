const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string()
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required()
    .messages({
      "string.pattern.base": "Invalid email address",
      "any.required": "The email address cannot be empty",
    }),
  password: Joi.string().min(6).max(28).required().messages({
    "string.min": "The password must be at least 6 characters",
    "string.max": "The password must be at most 28 characters",
    "any.required": "The password cannot be empty",
  }),
});

const LoginValidate = (credentials) => {
  const res = loginSchema.validate(credentials, {
    abortEarly: false,
  });
  const errors = {};
  if (res.error) {
    res.error.details.forEach(({ context, message }) => {
      errors[context.key] = message;
    });
    return errors;
  }

  return null;
};

export default LoginValidate;
