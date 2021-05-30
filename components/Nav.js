import requests from "../utils/requests";
import { useRouter } from "next/router";
function Nav() {
  const router = useRouter();
  console.log(requests);
  return (
    <nav className="relative">
      <div className="flex space-x-10 px-10 sm:px-20 overflow-x-scroll scrollbar-hide text-2xl ">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
          onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className="cursor-pointer last:pr-16 hover:text-white transition duration-150 transform hover:scale-125 active:text-red-500 whitespace-nowrap  "
          >
            {" "}
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute right-0 top-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
