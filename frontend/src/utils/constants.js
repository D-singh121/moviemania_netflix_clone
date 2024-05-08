// BACKED_API_END_POINT
export const API_URL_POINT = "https://moviemania-netflix-clone.onrender.com"

// This goes with api methods
export const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTk5MjVmYmY0OTJjOTQ4Nzg1ZjUzZDU4NTNjYWNjYiIsInN1YiI6IjY2MzFkYjliYzM5MjY2MDEyOTZjZjk3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5VSU8Qt0EtVU6rwt1J-baBBtfyMziLV3xc0ZEbaAUnA'
	}
};

//TMDB API ENDPOINTS
export const NOW_PLAYING_MOVIES = 'https://api.themoviedb.org/3/movie/now_playing';
export const POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular';
export const TOP_RATED_MOVIES = 'https://api.themoviedb.org/3/movie/top_rated';
export const UPCOMING_MOVIES = 'https://api.themoviedb.org/3/movie/upcoming';
export const TRAILER_MOVIES = 'https://api.themoviedb.org/3/movie/trailer';

export const  SEARCH_MOVIE_URL="https://api.themoviedb.org/3/search/movie?query=";

//tmdb movie images url
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500"; 