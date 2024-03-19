import TypingEffect from "./TypingEffect";
import UserIcon from "./icons/UserIcon";

export default function () {
  const clients = [
    {
      name: "Client Name",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse molestias est, exercitationem neque aliquam",
    },
    {
      name: "Client Name",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse molestias est, exercitationem neque aliquam",
    },
    {
      name: "Client Name",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse molestias est, exercitationem neque aliquam",
    },
  ];

  return (
    <section className="py-[128px]">
      <div className="mx-auto max-w-screen-lg">
        <h2 className="text-center text-4xl font-bold mb-10">
          <TypingEffect text="Here's what they have to say..." />
        </h2>
        <div className="flex gap-5">
          {clients.map((item) => {
            return (
              <div className="border-2 border-primary rounded-lg p-5">
                <div className="mb-10">
                  <div className="bg-primary rounded-full overflow-hidden w-[100px] h-[100px] flex items-end justify-center mx-auto">
                    <div className="text-white w-[70px] h-[70px]">
                      <UserIcon />
                    </div>
                  </div>
                </div>
                <div className="text-center font-bold mb-3">{item.name}</div>
                <p className="text-center">{item.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
