import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movie",
	initialState: {
		isLoading: false,
		nowPlayingMovies: null,
		popularMovie: null,
		topRatedMovies: null,
		upcomingMovies: null,

		trailerMovie: null,  // for videobackground trailer clip
		isSearchToggle: false, // for search toggle
		isMovieModalOpen: false, //for opening the modal on click over movie card
		cardMovieID: " ", // to store the movie id for use in movieModal  when we clicked over the perticular card.
	},

	reducers: {
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		}
		,
		setNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload
		},
		setPopularMovies: (state, action) => {
			state.popularMovie = action.payload
		},
		setTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload
		},
		setUpcommingMovies: (state, action) => {
			state.upcomingMovies = action.payload
		},
		setTrailerMovies: (state, action) => {
			state.trailerMovie = action.payload
		},
		setSearchToggle: (state) => {
			state.isSearchToggle = !state.isSearchToggle
		},
		setMovieModalOpen: (state, action) => {
			state.isMovieModalOpen = action.payload
		},
		setCardMovieId: (state, action) => {
			state.cardMovieID = action.payload
		}

	}
});


export const { setLoading, setNowPlayingMovies, setPopularMovies, setTopRatedMovies, setUpcommingMovies, setTrailerMovies, setSearchToggle, setMovieModalOpen, setCardMovieId } = movieSlice.actions;
export default movieSlice.reducer;