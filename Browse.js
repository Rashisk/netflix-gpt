import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <GptSearch/>
      <MainContainer />
      <SecondaryComponent />
    </div>
    /**
     * The Netflix browse page gets divided into two sections
     * 1. Main Video Container
     *     - Video Background
     *     - Video Title
     * 2. Secondary Video Container
     *      - Movie List * N
     *        - Cards * N
     */
  );
};

export default Browse;
