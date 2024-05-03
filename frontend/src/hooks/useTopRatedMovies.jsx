import axios from "axios";
import { useDispatch } from "react-redux";
import { options, TOP_RATED_MOVIES } from "../utils/constants.js";
import { setTopRatedMovies, setLoading } from "../redux_store/movieSlice.js";




const useTopRatedMovies = async () => {
	const dispatch = useDispatch();

	setLoading(true)
	try {
		const res = await axios.get(TOP_RATED_MOVIES, options)
		// console.log(res.data.results);
		dispatch(setTopRatedMovies(res.data.results))
		setLoading(false)

	} catch (error) {
		console.log(error);
		setLoading(false)

	} finally {
		setLoading(false)
	}
}

export default useTopRatedMovies;