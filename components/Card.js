import Image from 'next/image';
import {ThumbUpIcon} from '@heroicons/react/outline';
import { forwardRef } from 'react';
const Card = forwardRef(({ result }, ref) => {
  const BASE_URL = "http://image.tmdb.org/t/p/original/";

  return (
    <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in-out transform sm:hover:scale-105 ">
      <Image
      className="object-contain"
       layout="responsive"
        width={1920}
        height={1080}
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
      />
      <div className="p-2">
          <p className="truncate max-w-md">{result.overview}</p>
          <h2 className="transition-all ease-in-out duration-100 group-hover:font-semibold mt-1 text-white text-xl">{result.title || result.original_name}</h2>
          <p className="flex items-center opacity-0 group-hover:opacity-100">
              {result.release_date || result.first_air_date} .{' '}
              <ThumbUpIcon className="h-5 mx-2" />
              {result.vote_count}
          </p>
      </div>
      
    </div>
  );
})

export default Card;
