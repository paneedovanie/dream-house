import Button from "./Button";

export default function Header() {
  const navItems = [
    {
      label: "Home",
      isActive: true,
    },
    {
      label: "Guides",
    },
    {
      label: "Design",
    },
    {
      label: "About",
    },
  ];

  return (
    <header className="py-10">
      <nav className="flex max-w-screen-lg mx-auto items-center">
        <ul className="flex-1 flex gap-[64px]">
          {navItems.map((item, i) => {
            return (
              <li
                className={
                  "inline-block cursor-pointer opacity-60 " +
                  (item.isActive ? "!font-bold !opacity-100" : "")
                }
                key={i}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
        <Button className="bg-transparent !text-primary">Contact Us</Button>
      </nav>
    </header>
  );
}
