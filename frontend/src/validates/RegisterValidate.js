import Joi from "joi";

const registerSchema = Joi.object({
  first_name: Joi.string().required().messages({
    "any.required": "First name cannot be empty",
  }),
  last_name: Joi.string().required().messages({
    "any.required": "Last name cannot be empty",
  }),
  email: Joi.string()
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required()
    .messages({
      "any.required": "The email address cannot be empty",
      "string.pattern.base": "Invalid email address",
    }),
  password: Joi.string().min(6).max(28).required().messages({
    "any.required": "The password cannot be empty",
    "string.min": "The password must be at least 6 characters",
    "string.max": "The password must be at most 28 characters",
  }),
  bYear: Joi.number().required().messages({
    "any.required": "Year cannot be empty",
  }),
  bMonth: Joi.number().required().messages({
    "any.required": "Month cannot be empty",
  }),
  bDay: Joi.number().required().messages({
    "any.required": "Day cannot be empty",
  }),
  gender: Joi.string().required().messages({
    "any.required": "Gender cannot be empty",
  }),
});

const RegisterValidate = (userInfo) => {
  const res = registerSchema.validate(userInfo, {
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

export default RegisterValidate;
