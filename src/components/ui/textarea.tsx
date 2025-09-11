export function Textarea(props) {
  return (
    <textarea
      {...props}
      className={
        "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-0 focus:border-sky-500 " +
        (props.className || "")
      }
    />
  );
}
