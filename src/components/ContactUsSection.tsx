import Image from "next/image";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

export default function ContactUsSection() {
  return (
    <section className="pb-[128px]">
      <div className="mx-auto max-w-screen-lg flex gap-10">
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-5">Be updated!</h2>
          <div className="flex flex-col gap-3">
            <Input className="w-full" placeholder="First Name*" />
            <Input className="w-full" placeholder="Last Name*" />
            <Input className="w-full" placeholder="Email Subject*" />
            <Textarea
              className="w-full"
              placeholder="Write something here..."
              rows={5}
            />
            <Button className="w-full">Submit Email</Button>
          </div>
        </div>
        <div className="min-w-[600px]">
          <Image
            src="https://picsum.photos/600/600"
            width="600"
            height="600"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
}
