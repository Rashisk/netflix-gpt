import React from "react";
import MovieCards from "./MovieCards";
const MovieLists = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="flex flex-col p-2 gap-4">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCards key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
