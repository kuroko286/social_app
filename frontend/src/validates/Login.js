export const loginInputs = [
  {
    id: 1,
    label: "Email",
    type: "text",
    name: "email",
    placeholder: "Please enter your email",
    validation: {
      required: {
        value: true,
        message: `Email is required`,
      },
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Invalid email address",
      },
    },
  },
  {
    id: 2,
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Please enter your password",
    validation: {
      required: {
        value: true,
        message: "Password is required",
      },
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
      maxLength: {
        value: 28,
        message: "Password must be less than 28 characters",
      },
    },
  },
];
