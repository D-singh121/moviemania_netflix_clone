import axios from "axios";
import { useDispatch } from "react-redux";
import { options, UPCOMING_MOVIES } from "../utils/constants.js";
import { setUpcommingMovies, setLoading } from "../redux_store/movieSlice.js";


const useUpCommingMovies = async () => {
	const dispatch = useDispatch();

	setLoading(true)
	try {
		const res = await axios.get(UPCOMING_MOVIES, options)
		// console.log(res.data.results);
		dispatch(setUpcommingMovies(res.data.results))
		setLoading(false)

	} catch (error) {
		console.log(error);

	} finally {
		setLoading(false)
	}
}

export default useUpCommingMovies;