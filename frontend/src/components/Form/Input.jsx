import { useFormContext } from "react-hook-form";
import { findInputError, isInputValid } from "@/utils/login";

export const Input = ({
  label,
  name,
  type,
  id,
  placeholder,
  validation,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputError = findInputError(errors, name);
  const isValid = isInputValid(inputError);
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        {!isValid && <InputError message={inputError.error.message} />}
      </div>
      <input
        id={id}
        type={type}
        className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </div>
  );
};

export const InputError = ({ message }) => {
  return <span className="text-red-500">{message}</span>;
};
