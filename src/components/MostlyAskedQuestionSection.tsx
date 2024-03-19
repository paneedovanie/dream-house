import Image from "next/image";
import TypingEffect from "./TypingEffect";
import { InView } from "react-intersection-observer";

export default function () {
  const questions = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  ];

  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref, entry }) => (
        <section ref={ref} className="py-[64px]">
          <div className="flex mx-auto max-w-screen-lg gap-[32px]">
            <div>
              <h2 className="text-5xl font-bold mb-10">
                <TypingEffect
                  started={inView}
                  disableInView
                  text="Lorem ipsum dolor sit amet consectetur"
                />
              </h2>
              <div className="border-t-2 border-primary">
                {questions.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex justify-between border-b-2 border-primary p-3 items-center"
                    >
                      <div>{item}</div>
                      <div className="text-4xl">+</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <Image
                src="https://picsum.photos/400/600"
                width="400"
                height="600"
                alt="House"
                className={`transition-all ${
                  inView ? "" : "translate-x-[100%] opacity-0"
                }`}
                style={{
                  transitionDuration: "1s",
                }}
              />
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}
