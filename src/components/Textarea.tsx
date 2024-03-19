import { HTMLAttributes } from "react";

type TextareaProps = HTMLAttributes<HTMLTextAreaElement> & {
  placeholder?: string;
  rows?: number;
};

export default function (props: TextareaProps) {
  return (
    <textarea
      {...props}
      className={
        "border-2 border-primary py-1 px-3 bg-transparent rounded-md " +
        props.className
      }
    />
  );
}
