import Link from "next/link";

export default function Footer() {
  const links = [
    [{ label: "Home" }, { label: "About Us" }],
    [{ label: "Promo" }, { label: "Routes" }],
    [{ label: "Recommendations" }, { label: "Guides" }, { label: "Blogs" }],
    [
      { label: "Mission Statement" },
      { label: "The Team" },
      { label: "Contact Us" },
    ],
  ];
  return (
    <footer className="py-[64px] bg-footer">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex gap-[64px] mb-10">
          <h1 className="text-5xl max-w-40">Art of Building</h1>
          <div className="flex-1">
            <div className="font-bold mb-5">Quick Links</div>
            <div className="flex justify-between">
              {links.map((col, i) => {
                return (
                  <ul className="flex flex-col gap-2" key={i}>
                    {col.map((item, j) => {
                      return (
                        <li key={`i,j`}>
                          <Link href="#">{item.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-center">
          2021-2022 Art of Building. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
