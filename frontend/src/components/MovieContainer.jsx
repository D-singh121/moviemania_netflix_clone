import MovieList from "./MovieList"
import { useSelector } from 'react-redux';



const MovieContainer = () => {

	const movies = useSelector((state) => state.movies)
	// console.log(movies);
	return (
		<div className=" bg-black">
			<div className="-mt-48 relative z-10">
				<MovieList title={"Popular Movies"} movies={movies.popularMovie} />
				<MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
				<MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
				<MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
			</div>

		</div>
	)
}

export default MovieContainer;