import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
// Hooks are normal Javascript functions

// We can create custom hooks as well along with some built in hooks like useState, useEffect etc.

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    /*
     the api is being called 2 times because of strict mode which happens only in development mode
    // To check if any uncertainity occurs in the app
    // in production mode - it will be called only once
    */
    getPopularMovies();
    // once you get the list , you need to add the movies in the store - so you dispatch the action and call an add method
  }, []);
};

export default usePopularMovies;
