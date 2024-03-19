import { HTMLAttributes } from "react";

type InputProps = HTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
};

export default function (props: InputProps) {
  return (
    <input
      {...props}
      className={
        "border-2 border-primary py-1 px-3 bg-transparent rounded-md " +
        props.className
      }
    />
  );
}
