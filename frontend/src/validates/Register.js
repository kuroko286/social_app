export const registerInputs = [
  {
    id: 1,
    name: "first_name",
    type: "text",
    placeholder: "Please enter your first name",
    label: "First name",
    validation: {
      required: {
        value: true,
        message: "First name is required",
      },
    },
  },
  {
    id: 2,
    name: "last_name",
    type: "text",
    placeholder: "Please enter your last name",
    label: "Last name",
    validation: {
      required: {
        value: true,
        message: "Last name is required",
      },
    },
  },
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "Please enter your email",
    label: "Email",
    validation: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Invalid email address",
      },
    },
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Please enter your password",
    label: "Password",
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
  {
    id: 5,
    name: "bYear",
    type: "number",
    placeholder: "Please enter your birth year",
    label: "Birth year",
    validation: {
      required: {
        value: true,
        message: "Year is required",
      },
      min: {
        value: 1900,
        message: "Year must be greater or equal than 1900",
      },
      max: {
        value: new Date().getFullYear(),
        message: `Year must be less or equal than ${new Date().getFullYear()}`,
      },
    },
  },
  {
    id: 6,
    name: "bMonth",
    type: "number",
    placeholder: "Please enter your birth month",
    label: "Birth month",
    validation: {
      required: {
        value: true,
        message: "Month is required",
      },
      min: {
        value: 1,
        message: "Month must be greater or equal than 1",
      },
      max: {
        value: 12,
        message: "Month must be less or equal than 12",
      },
    },
  },
  {
    id: 7,
    name: "bDay",
    type: "number",
    placeholder: "Please enter your birth day",
    label: "Birth day",
    validation: {
      required: {
        value: true,
        message: "Day is required",
      },
      min: {
        value: 1,
        message: "Day must be greater or equal than 1",
      },
      max: {
        value: 31,
        message: "Day must be less or equal than 31",
      },
    },
  },
];
export const radiosInput = {
  name: "gender",
  groupLabel: "Gender",
  items: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ],
};
