import { HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export default function (props: ButtonProps) {
  return (
    <button
      {...props}
      className={
        `border-2 border-primary bg-primary px-3 py-1 min-w-[175px] text-white rounded-md font-bold hover:rounded-3xl transition-all ` +
        props.className
      }
    />
  );
}
