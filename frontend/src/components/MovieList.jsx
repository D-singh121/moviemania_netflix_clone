import MovieCard from "./MovieCard"


const MovieList = ({ title, movies, movieTitleName = false }) => {
	return (
		<div className="px-8">
			<h1 className={`${movieTitleName === true ? "text-3xl py-3 text-black" : "text-3xl py-3 text-white"}`}>{title}</h1>
			<div className="flex overflow-x-auto no-scrollbar cursor-pointer ">
				<div className="flex items-center">
					{
						movies?.map((movie) => {
							// console.log(movie);
							const { id, poster_path } = movie
							return (
								<MovieCard posterPath={poster_path} key={id} movieId={id} />
							)
						})
					}

				</div>
			</div>
		</div>
	)
}

export default MovieList