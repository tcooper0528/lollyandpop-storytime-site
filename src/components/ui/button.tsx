const cx = (...c) => c.filter(Boolean).join(" ");

export function Button({ variant="default", size="md", className="", asChild, ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-sky-600 text-white hover:bg-sky-700 shadow-sm",
    outline: "border border-slate-300 text-slate-800 hover:bg-slate-50",
  };
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-11 px-5 text-base",
    icon: "h-10 w-10",
  };
  return (
    <button
      className={cx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
