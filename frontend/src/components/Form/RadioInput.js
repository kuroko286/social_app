import { useFormContext } from "react-hook-form";

export const RadioInput = ({ label, name, value }) => {
  const { register } = useFormContext();

  return (
    <div className="flex items-center gap-3">
      <input type="radio" value={value} {...register(name)} />
      <label className="font-semibold">{label}</label>
    </div>
  );
};

export const RadioGroup = ({ name, groupLabel, items }) => {
  return (
    <div className="mt-3">
      <label className="font-medium">{groupLabel}</label>
      <div className="">
        {items.map((item) => {
          return <RadioInput {...item} key={item.value} name={name} />;
        })}
      </div>
    </div>
  );
};
