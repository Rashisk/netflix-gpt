import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useVideoTrailer = (movieId) => {
  // 1st solution - to create state variable
  // 2nd solution - Instead of creating state variable, we can use Redux store to store and fetch our trailer
  // const[trailer, setTrailer] = useState('');
  const dispatch = useDispatch();
  // To read the data from the store , we'll use useSelector hook
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const fetchVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    //How will I know if that particular card is my trailer? ===> We'll use filter method to filter out the type attribute whose value is trailer
    const filterTrailerData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    // in case of more than one trailer
    const trailerData = filterTrailerData.length
      ? filterTrailerData[0]
      : json.results[0];
    // setTrailer(trailerData);
    // console.log(trailer);
    dispatch(addTrailerVideo(trailerData));
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return {
    trailer,
  };
};

export default useVideoTrailer;
