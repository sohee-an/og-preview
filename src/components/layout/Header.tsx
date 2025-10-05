import Link from "next/link";

const HEADER_MENU = [{ id: 1, title: "OG 생성", url: "/og" }];

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 p-4 border-b flex justify-between ">
      <Link href={"/"}>OG PREVIEW</Link>
      <div className="border border-blue-400 p-1.5 text-blue-400">
        {HEADER_MENU.map(({ id, title, url }) => {
          return (
            <Link key={id} href={url}>
              {title}
            </Link>
          );
        })}
      </div>
    </header>
  );
}

export default Header;
