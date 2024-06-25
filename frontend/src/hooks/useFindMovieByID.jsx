import axios from "axios";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTrailerMovies } from "../redux_store/movieSlice";
import { setLoading } from "../redux_store/movieSlice";


const useFindMovieByID = async (movieId) => {
	// console.log(movieId);
	const dispatch = useDispatch();
	useEffect(() => {
		const getMovieById = async () => {
			dispatch(setLoading(true))
			try {
				const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);

				// console.log(res.data.results);
				const trailer = res?.data?.results?.filter((item) => {
					return item.type === "Trailer";
				});
				console.log(trailer);

				dispatch(setTrailerMovies(trailer.length > 0 ? trailer[0] : res.data.results[0]));
			} catch (error) {
				console.log(error);
			} finally {
				dispatch(setLoading(false))
			}
		}
		getMovieById();
	}, [movieId])
}

export default useFindMovieByID;