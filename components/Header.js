import Image from "next/image";
import Nav from "./Nav";

function Header() {
  return (
    <header className="flex flex-col lg:flex-row m-5 items-center justify-between px-2 sm:px-10 ">
      <Image
        className="object-contain"
        src="/images/hulu_logo.png"
        height={100}
        width={200}
      />
      <Nav />
    </header>
  );
}

export default Header;
