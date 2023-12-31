import { useFormContext } from "react-hook-form";
import { useFieldError } from "@/hooks/useFieldError";
import { InputError } from "./InputError";

export const FileInput = ({ name, id, validation, children, multiple }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { isValid, message } = useFieldError(errors, name);
  return (
    <div>
      <input
        type="file"
        className="hidden"
        multiple={multiple}
        {...register(name, validation)}
        id={id}
      />
      <label htmlFor={id} className="cursor-pointer">
        {children}
      </label>
      {isValid && <InputError message={message} />}
    </div>
  );
};
