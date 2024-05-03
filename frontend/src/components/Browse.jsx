import { Header } from "./index.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MainContainer from "./MainContainer.jsx";

import { useNowPlayingMovies, usePopularMovies, useTopRatedMovies, useUpCommingMovies } from "../hooks/index.js";
import MovieContainer from "./MovieContainer.jsx";

import SearchMovie from "./SearchMovie.jsx";


const Browse = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.user);

	// for search toggle
	const isSearchToggled = useSelector((state) => state.movies.isSearchToggle)
	// console.log(isSearchToggled);

	// calling all our custom hooks
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpCommingMovies();


	useEffect(() => {
		if (!user) {
			navigate("/")
		}
	})


	return (
		<div>
			<Header />
			{/* when search toggle is true , we will redirected to the search movies page otherwise our main page will be there  */}
			{isSearchToggled
				? <SearchMovie />
				: (
					<>
						<MainContainer />
						<MovieContainer />
					</>
				)
			}
		</div>
	)
}

export default Browse;