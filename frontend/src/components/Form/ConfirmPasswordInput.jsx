import { useFormContext } from "react-hook-form";
import { useFieldError } from "@/hooks/useFieldError";
import { InputError } from "./InputError";
import { checkConfirmPassword } from "@/validates/ResetPassword";

export const ConfirmPasswordInput = ({
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
    getValues,
  } = useFormContext();
  const { isValid, message } = useFieldError(errors, name);
  // prevent change value when scroll
  const handleScroll = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        {!isValid && <InputError message={message} />}
      </div>
      <input
        id={id}
        type={type}
        className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
        placeholder={placeholder}
        {...register(name, {
          ...validation,
          validate: (value) => checkConfirmPassword(value, getValues),
        })}
        onScroll={handleScroll}
      />
    </div>
  );
};
