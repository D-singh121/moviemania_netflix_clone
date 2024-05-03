import { useState } from "react";
import axios from 'axios';
import { options, SEARCH_MOVIE_URL } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux'; // built-in method

import { setSearchMovieDetails } from "../redux_store/searchMovieSlice";  // action importing
import { setLoading } from "../redux_store/userSlice"; // seLoading action importing

import MovieList from "./MovieList.jsx";
import { toast } from 'react-hot-toast';



const SearchMovie = () => {
	const [searchMovieName, setSearchMovieName] = useState(""); // to store the search input data
	const dispatch = useDispatch(); // built-in hook

	const isLoading = useSelector((state) => state.auth.isLoading); // getting from user auth state



	// handling input search data 
	const submitSearchMovieHandler = async (e) => {
		e.preventDefault(); // prevent from default post behaviour

		// if user type something then only we call api otherwise return error 
		if (searchMovieName.length > 0) {
			dispatch(setLoading(true));
			try {

				const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovieName}&include_adult=false&language=en-US&page=1`, options);
				// console.log(res.data.results);
				const searchMovieResultData = res.data.results;  // storing result in variable

				dispatch(setSearchMovieDetails({ searchMovieResultData, searchMovieName }));  // setting searchName and searchedData in redux store

			} catch (error) {
				console.log(error);
			} finally {
				dispatch(setLoading(false));
			}
			setSearchMovieName(""); // emptyout input area
		} else {
			// console.log("Please type movie name !");
			toast.error("Please type movie name..!")
		}
	}


	const { searchedMovieName, searchedMovieData } = useSelector((state) => state.searchMovie) // fetching from searchMovie state
	console.log(searchedMovieName, searchedMovieData);


	return (
		<>
			<div className="w-[100%] flex justify-center pt-[10%]">
				<form onSubmit={submitSearchMovieHandler} className="w-[50%]">
					<div className="w-[100%] flex justify-between shadow-sm border-2 p-2">
						<input
							className="px-2 py-3 w-[100%] outline-none  text-lg rounded-md"
							type="text"
							placeholder="Search Movies..."
							value={searchMovieName}
							onChange={(e) => setSearchMovieName(e.target.value)}
						/>
						<button
							className="bg-red-600 px-4 py-2 text-white rounded-md">{isLoading ? "Loading..." : "Search"}</button>
					</div>
				</form>
			</div>
			{searchedMovieData.length > 0
				? (<MovieList title={searchedMovieName} movieTitleName={true} movies={searchedMovieData} />)
				: (<h1 className="text-black text-center align-middle pt-6 text-lg opacity-45">Movie not found with this name, please type proper movie name !</h1 >)
			}
		</>
	);
}

export default SearchMovie;	