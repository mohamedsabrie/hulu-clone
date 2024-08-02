import requests from "../utils/requests";
import { useRouter } from "next/router";
function Nav() {
  const router = useRouter();
  console.log(requests);
  return (
    <nav className="relative w-full flex  justify-center lg:justify-end lg:pr-5 ">
      <div className="flex space-x-5 overflow-x-scroll scrollbar-hide sm:space-x-10    sm:text-2xl ">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
          onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className={`cursor-pointer  hover:text-white transition duration-150 transform  whitespace-nowrap ${router.query.genre == key ? "font-semi-bold border-b" : "" }  `}
          >
            {" "}
            {title}
          </h2>
        ))}
      </div>
      {/* <div className="absolute right-0 top-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" /> */}
    </nav>
  );
}

export default Nav;
