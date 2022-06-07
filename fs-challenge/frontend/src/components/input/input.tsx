import { InputProps } from "./types";

export const Input = (props: InputProps) => {
  return (
    <>
      <input
        className="w-full bg-transparent p-4 border rounded-xl border-onix text-lg outline-none focus:border-platinum"
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </>
  );
};
