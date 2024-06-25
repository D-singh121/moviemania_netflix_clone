import { useSelector } from 'react-redux';
import { useFindMovieByID } from '../hooks/index.js';



const VideoBackground = ({ movieId, fromCardModal = false }) => {
  useFindMovieByID(movieId);
  console.log(movieId); // here i  am getting movie id


  const trailerHomePageMovie = useSelector((state) => state.movies.trailerMovie);
  // console.log(trailerHomePageMovie);  // but here i am getting null , 
  const { key } = trailerHomePageMovie || {}; // this is very important because here we were getting the null object here so, protecting from crases we just used empty object so it can return empty object in case of null.




  return (
    <div className="w-[vw] overflow-hidden ">
      {/* //coditional rendering  */}
      {trailerHomePageMovie && (
        <iframe
          className={`${fromCardModal === true ? "w-[100%]" : "w-screen aspect-video"}`}
          src={`https://www.youtube.com/embed/${key}?si=z-Ete8ip9h-c8ntg&autoplay=1&mute=1`}
          title="YouTube video player"
          // frameBorder="0"
          allowFullScreen

        >
        </iframe>
      )}

    </div >
  )
}
export default VideoBackground;