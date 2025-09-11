export function Input(props) {
  return (
    <input
      {...props}
      className={
        "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 outline-none ring-0 focus:border-sky-500 " +
        (props.className || "")
      }
    />
  );
}
