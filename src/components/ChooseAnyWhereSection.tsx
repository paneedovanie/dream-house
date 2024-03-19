import Image from "next/image";
import TypingEffect from "./TypingEffect";
import { InView } from "react-intersection-observer";

export default function () {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref }) => (
        <section ref={ref} className="bg-primary text-white py-[64px]">
          <div className="max-w-screen-lg mx-auto flex gap-[64px]">
            <div>
              <h2 className="text-5xl mb-10">
                <TypingEffect
                  started={inView}
                  disableInView
                  text="Choose anywhere you'd like to be"
                />
              </h2>
              <div className="mb-5">
                <div className="font-bold mb-2">Lorem Ipsum dolor</div>
                <p className="text-justify leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  facilis asperiores aliquid illo ipsum! Eaque asperiores porro
                  modi? Repudiandae ipsam blanditiis natus, ut esse unde nisi
                  exercitationem quae deleniti quaerat?
                </p>
              </div>
              <div>
                <div className="font-bold mb-2">Lorem Ipsum dolor</div>
                <p className="text-justify leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  facilis asperiores aliquid illo ipsum! Eaque asperiores porro
                  modi? Repudiandae ipsam blanditiis natus, ut esse unde nisi
                  exercitationem quae deleniti quaerat?
                </p>
              </div>
            </div>
            <div className="min-w-[512px] w-full">
              <Image
                src="https://picsum.photos/800/600"
                width="800"
                height="600"
                alt="House"
                className={`transition-all ${inView ? "" : "opacity-0"}`}
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
