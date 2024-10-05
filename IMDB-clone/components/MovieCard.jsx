import React from "react";

function MovieCard({ poster_path, name }) {
  return (
    <div
      className="h-[30vh] w-[20vh] bg-center bg-cover rounded-xl hover:scale-110 duration-200 m-2 "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-white text-center bg-gray-900/60 w-full p-2 text-xl"> 
        {name}
       </div>
    </div>
  );
}

export default MovieCard;
