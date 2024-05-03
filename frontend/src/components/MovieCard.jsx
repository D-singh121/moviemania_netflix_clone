import { TMDB_IMG_URL } from "../utils/constants";
import { useDispatch } from 'react-redux';
import { setMovieModalOpen, setCardMovieId } from "../redux_store/movieSlice.js"

const MovieCard = ({ posterPath, movieId }) => {
	const dispatch = useDispatch();


	if (posterPath === null) return null;
	// console.log(posterPath);



	const handleModalOpen = () => {
		dispatch(setCardMovieId(movieId)) // storing the movieId in movies state 
		dispatch(setMovieModalOpen(true))
	}


	return (
		<div className="w-48 pr-3" onClick={handleModalOpen}>
			<figure >
				<img src={`${TMDB_IMG_URL}/${posterPath}`} alt="banner-image" />
			</figure>
		</div>
	)
}

export default MovieCard;