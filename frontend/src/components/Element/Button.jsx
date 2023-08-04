export const Button = ({ className, disabled, children, ...props }) => {
  return (
    <button
      className={`py-2 px-4 rounded-lg ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
