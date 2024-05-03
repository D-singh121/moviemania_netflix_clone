import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import searchMovieReducer from './searchMovieSlice'

const store = configureStore({
	reducer: {
		auth: userReducer,
		movies: moviesReducer,
		searchMovie: searchMovieReducer,
	},

});

export default store;