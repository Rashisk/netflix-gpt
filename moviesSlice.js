import { createSlice } from "@reduxjs/toolkit";

// Steps to create an object slice in Redux 
 
/**
 * 1. Create an object slice
 * 2. Add 3 attributes in that object : name, initialState & methods for reducers 
 * 3. Export the object
 * 4. The object will have an initial state and methods will take state as a parameter
 * 5. The action will also be a parameter that will change a state via its payload ( action.payload)
 */

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const {addNowPlayingMovies, addUpcomingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies} = moviesSlice.actions;
