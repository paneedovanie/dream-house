import Image from "next/image";
import Button from "./Button";
import { InView } from "react-intersection-observer";
import TypingEffect from "./TypingEffect";

export default function () {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref, entry }) => (
        <section ref={ref} className="pt-10 pb-[125px]">
          <div className="flex max-w-screen-lg mx-auto gap-5">
            <div className="flex flex-col">
              <div className="flex-1">
                <h1 className="text-6xl mb-5">
                  <TypingEffect text="Design your Dream House" />
                </h1>
                <p className="leading-tight text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit doloremque cum, numquam delectus ducimus, omnis
                  maxime molestiae quibusdam, dolorum eius error repellendus eum
                  aspernatur illo? Rem maxime omnis qui ab.
                </p>
              </div>
              <div>
                <Button>Learn More</Button>
              </div>
            </div>
            <div
              className={`min-w-[600px] transition-all ${
                inView ? "" : "opacity-0"
              }`}
              style={{
                transitionDuration: "1s",
              }}
            >
              <Image
                src="https://picsum.photos/600/400"
                width="800"
                height="600"
                alt="Hero"
              />
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}
