import Button from "./Button";
import TypingEffect from "./TypingEffect";

export default function BunnerSection() {
  return (
    <section className="bg-primary py-10">
      <div className="mx-auto max-w-lg text-white text-center">
        <h2 className="text-6xl mb-10">
          <TypingEffect text="Imagination to reality" />
        </h2>
        <Button className="!border-white">Design</Button>
      </div>
    </section>
  );
}
