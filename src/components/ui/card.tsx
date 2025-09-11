export function Card({ className="", ...props }) {
  return <div className={`rounded-2xl border bg-white ${className}`} {...props} />;
}
export function CardHeader({ className="", ...props }) {
  return <div className={`px-6 pt-6 ${className}`} {...props} />;
}
export function CardTitle({ className="", ...props }) {
  return <h3 className={`text-xl font-semibold ${className}`} {...props} />;
}
export function CardContent({ className="", ...props }) {
  return <div className={`px-6 pb-6 ${className}`} {...props} />;
}
