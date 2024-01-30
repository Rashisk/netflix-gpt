import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  /*
   * 2. Secondary Video Container
   *      - Movie List * N
   *        - Cards * N
   *
   * Basically - A m*n matrix
   *
   * <Secondary Component mapping Movie Lists/>
   *    <Movie Lists mapping Movie Cards/>
   *          <Movie Card/>
   */
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black w-screen">
      <div className=" -mt-40 pl-12 relative z-20">
        <MovieLists title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieLists title={"Popular"} movies={movies.popularMovies} />
        <MovieLists title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieLists title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
