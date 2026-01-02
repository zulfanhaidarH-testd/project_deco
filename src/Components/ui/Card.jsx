export const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-xl border bg-card text-card-foreground shadow-sm bg-white ${className}`}>
      {children}
    </div>
  );
};