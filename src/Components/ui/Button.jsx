export const Button = ({ children, variant = "primary", className = "", onClick }) => {
  const baseStyles = "inline-flex items-center bg-slate-600 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-8 py-6 text-lg";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-slate-800 shadow",
    outline: "border border-slate-300 bg-transparent hover:bg-slate-100 hover:text-slate-900 text-slate-900",
    ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-500",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};