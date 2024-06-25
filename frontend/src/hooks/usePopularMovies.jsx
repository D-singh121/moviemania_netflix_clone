import axios from "axios";
import { useDispatch } from "react-redux";
import { options, POPULAR_MOVIES } from "../utils/constants.js";
import { setPopularMovies, setLoading } from "../redux_store/movieSlice.js";



const usePopularMovies = async () => {

	const dispatch = useDispatch();

	setLoading(true)
	try {
		const res = await axios.get(POPULAR_MOVIES, options)
		// console.log(res.data.results);
		dispatch(setPopularMovies(res.data.results));
		setLoading(false)

	} catch (error) {
		console.log(error);
		setLoading(false)

	} finally {
		setLoading(false)
	}


}

export default usePopularMovies;