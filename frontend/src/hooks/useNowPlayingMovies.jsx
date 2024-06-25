import axios from "axios";
import { useDispatch } from "react-redux";
import { options, NOW_PLAYING_MOVIES } from "../utils/constants.js";
import { setNowPlayingMovies, setLoading } from "../redux_store/movieSlice.js";


const useNowPlayingMovies = async () => {
	const dispatch = useDispatch();

	setLoading(true)
	try {
		const res = await axios.get(NOW_PLAYING_MOVIES, options)
		// console.log(res.data.results);
		dispatch(setNowPlayingMovies(res.data.results))
		setLoading(false)

	} catch (error) {
		console.log(error);
		// setLoading(false)

	} finally {
		setLoading(false)
	}
};

export default useNowPlayingMovies;