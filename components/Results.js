import Card from "./Card";
import FlipMove from "react-flip-move";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useState } from "react";

function Results({ results }) {
  const [trailerUrl, setTrailerUrl] = useState("");
  console.log(trailerUrl);
  const closeVideo =() =>{
    setTrailerUrl("");
  }

  const handleClick = (movie) => {
    console.log("u clicked me");
    if (!trailerUrl) {
      movieTrailer(movie?.original_title || movie?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div>
      <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2  xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {results?.map((result) => (
          <div key={result.id} onClick={() => handleClick(result)}>
            <Card result={result} />
          </div>
        ))}
      </FlipMove>
      {trailerUrl && (
        <div>
            
          <YouTube
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
            videoId={trailerUrl}
            opts={opts}
          />
          <div onClick={closeVideo} className=" fixed top-0 left-0 bg-black bg-opacity-30 w-screen h-screen z-40" />
        </div>
      )}
    </div>
  );
}
export default Results;
