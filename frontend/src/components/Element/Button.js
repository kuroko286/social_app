export const Button = ({ className, children, ...props }) => {
  return (
    <button className={`py-2 px-4 rounded-lg ${className}`} {...props}>
      {children}
    </button>
  );
};
