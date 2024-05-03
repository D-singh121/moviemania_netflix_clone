import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';


const MainContainer = () => {

	const movies = useSelector((store) => store.movies.nowPlayingMovies);
	if (!movies) return;
	console.log(movies);

	const { overview, id, title } = movies[2]
	console.log(overview, id, title);

	return (
		<div>
			<VideoTitle	
			title={title}
			overview={overview}
			/>

			<VideoBackground
			movieId={id}
			/>
		</div>
	)
}

export default MainContainer;