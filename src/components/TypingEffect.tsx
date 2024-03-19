import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

type TypingEffectProps = {
  started?: boolean;
  disableInView?: boolean;
  text: string;
  onEnded?: () => void;
};

export default function (props: TypingEffectProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  const { ref, inView, entry } = useInView({ triggerOnce: true });

  useEffect(() => {
    let index = 0;
    if (
      !textRef.current ||
      !inView ||
      (!props.started && inView && !!props.disableInView) ||
      props.text.length === index
    ) {
      return;
    }

    const timer = setInterval(() => {
      if (!textRef.current) {
        return;
      }
      textRef.current.children[index].classList.remove("opacity-0");
      index++;
      if (props.text.length === index) {
        clearInterval(timer);
        props.onEnded?.();
      }
      return;
    }, 100);
  }, [props.started, inView]);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }

    textRef.current.innerHTML = props.text
      .split("")
      .map((item) => `<span class="opacity-0">${item}</span>`)
      .join("");
  });

  return (
    <div ref={ref} className="inline">
      <div ref={textRef} className="inline"></div>
    </div>
  );
}
