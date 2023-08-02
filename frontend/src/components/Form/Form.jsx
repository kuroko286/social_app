import { FormProvider, useForm } from "react-hook-form";

export const Form = ({
  loading,
  error,
  responseData,
  children,
  submitButton = "Submit",
  initalState = {},
  successMeessage = "Send data successfully",
  handleSubmit,
}) => {
  const methods = useForm({
    defaultValues: initalState,
  });

  const onSubmit = methods.handleSubmit((data) => {
    handleSubmit(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        {children}
        <div className="flex items-center justify-between">
          <input
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 cursor-pointer`}
            type="submit"
            value={submitButton}
            disabled={loading}
            onClick={onSubmit}
          />
        </div>
        {error && <span className="text-red-500">{error}</span>}
        {responseData && (
          <span className="text-green-500">{successMeessage}</span>
        )}
      </form>
    </FormProvider>
  );
};
