import Image from "next/image";
import RightArrowIcon from "./icons/RightArrowIcon";
import TypingEffect from "./TypingEffect";
import { useState } from "react";
import { InView } from "react-intersection-observer";

const MainMessage = () => {
  const [aniEnded, setAniEnded] = useState(false);
  return (
    <h2 className="text-5xl mb-5">
      {aniEnded ? (
        <>
          <div>See houses you've</div>
          <div>
            <span className="underline">never</span>
            &nbsp;seen before
          </div>
        </>
      ) : (
        <TypingEffect
          text="See houses you've never seen before"
          onEnded={() => setAniEnded(true)}
        />
      )}
    </h2>
  );
};

export default function () {
  const items = [
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nisi facere tempore, amet quas libero, voluptatibus quae cupiditate explicabo nostrum ipsa vitae repudiandae dignissimos quam esse dolor magni ipsam dolores?",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nisi facere tempore, amet quas libero, voluptatibus quae cupiditate explicabo nostrum ipsa vitae repudiandae dignissimos quam esse dolor magni ipsam dolores?",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nisi facere tempore, amet quas libero, voluptatibus quae cupiditate explicabo nostrum ipsa vitae repudiandae dignissimos quam esse dolor magni ipsam dolores?",
    },
  ];

  return (
    <section className="pt-[125px] pb-10">
      <div className="max-w-screen-lg mx-auto">
        <InView triggerOnce threshold={1}>
          {({ inView, ref }) => (
            <div ref={ref} className="flex justify-between overflow-hidden">
              {items.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={`hover:shadow p-5 border opacity-60 hover:opacity-100 transition-all ${
                      inView ? "" : `opacity-0`
                    }`}
                    style={{
                      transitionDuration: "1s",
                      transform: inView
                        ? `translateY(0)`
                        : `translateY(${100 + 50 * i}%)`,
                    }}
                  >
                    <Image
                      src="https://picsum.photos/600/400"
                      width="600"
                      height="400"
                      alt="House"
                    />
                    <div className="my-3">
                      <div className="bg-primary h-[2px] w-10"></div>
                    </div>
                    <h1 className="text-3xl font-bold mb-3 leading-7">
                      {item.title}
                    </h1>
                    <p className="leading-tight text-justify">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </InView>
        <div className="text-center max-w-sm mx-auto my-[320px]">
          <div className="flex justify-center mb-10">
            <Image
              src="/house-icon.png"
              height={50}
              width={50}
              alt="house icon"
            />
          </div>
          <MainMessage />
          <div className="font-bold">MINIMALIST | SIMPLE | CREATIVE</div>
        </div>
        <InView triggerOnce threshold={1}>
          {({ inView, ref }) => (
            <div ref={ref} className="flex gap-5">
              <div className="min-w-[400px]">
                <Image
                  src="https://picsum.photos/500/600"
                  width="500"
                  height="600"
                  alt="House"
                  className={`transition-all ${
                    inView ? "" : "ml-[-100%] opacity-0"
                  }`}
                  style={{
                    transitionDuration: "1s",
                  }}
                />
              </div>
              <div>
                <div className="mb-10">
                  <Image
                    src="https://picsum.photos/200/175"
                    width="300"
                    height="225"
                    alt="House"
                    className={`transition-all ${inView ? "" : "opacity-0"}`}
                    style={{
                      transitionDuration: "2s",
                    }}
                  />
                </div>
                <div className="flex gap-5 mb-3">
                  <h3 className="font-bold text-3xl underline">
                    <TypingEffect
                      started={inView}
                      disableInView
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    />
                  </h3>
                  <div>
                    <p className="leading-tight mb-3 text-justify">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sunt omnis, voluptates, est reprehenderit iure molestias
                      numquam quos distinctio repudiandae nobis esse quo,
                      placeat et non quae facilis? Repellendus, commodi dolor?
                    </p>
                    <p className="leading-tight text-justify">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Sunt omnis, voluptates, est reprehenderit iure molestias
                      numquam quos distinctio repudiandae nobis esse quo,
                      placeat et non quae facilis? Repellendus, commodi dolor?
                    </p>
                  </div>
                </div>
                <div
                  className={`flex justify-end transition-all ${
                    inView ? "" : " translate-y-[50px] opacity-0"
                  }`}
                  style={{
                    transitionDuration: "2s",
                  }}
                >
                  <RightArrowIcon />
                </div>
              </div>
            </div>
          )}
        </InView>
      </div>
    </section>
  );
}
