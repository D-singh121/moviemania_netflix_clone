import { createSlice } from "@reduxjs/toolkit";


const searchMovieSlice = createSlice({
	name: "searchMovie",
	initialState: {
		searchedMovieName: null,
		searchedMovieData: [],
	},
	reducers: {
		setSearchMovieDetails: (state, action) => {
			const { searchMovieResultData, searchMovieName } = action.payload // movie name and moviedata are comming in payload as destructuring.

			state.searchedMovieName = searchMovieName; // payloads ko state me set kar denge
			state.searchedMovieData = searchMovieResultData; // setting result as moviedata
		}
	}
});

export const { setSearchMovieDetails } = searchMovieSlice.actions;
export default searchMovieSlice.reducer;