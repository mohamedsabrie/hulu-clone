import Image from "next/image";
import Nav from "./Nav";

function Header() {
  return (
    <header className="flex flex-col lg:flex-row m-5 items-center justify-between px-2 sm:px-10 ">
      <h1 className="text-4xl font-bold my-5">TrailerFlix</h1>
      <Nav />
    </header>
  );
}

export default Header;
