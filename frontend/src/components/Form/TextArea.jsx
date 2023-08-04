import { useFormContext } from "react-hook-form";
import { useFieldError } from "@/hooks/useFieldError";
import { InputError } from "./InputError";

export const Textarea = ({
  id,
  name,
  label,
  className,
  placeholder,
  validation,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { isValid, message } = useFieldError(errors, name);
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        {!isValid && <InputError message={message} />}
      </div>
      <textarea
        {...register(name, validation)}
        className={`outline-none border-none resize-none w-96 h-32 ${className}`}
        placeholder={placeholder}
        {...props}
      ></textarea>
    </div>
  );
};
