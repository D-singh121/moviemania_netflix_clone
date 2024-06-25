import * as React from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setMovieModalOpen } from "../redux_store/movieSlice.js"
import VideoBackground from './VideoBackground.jsx';



export default function MovieDialog() {
	const dispatch = useDispatch()

	const isDialogOpen = useSelector((state) => state.movies.isMovieModalOpen);
	// console.log(isDialogOpen);

	const cardMovieId = useSelector((state) => state.movies.cardMovieID); // fetching the movieId from movies state to use in videobg component while clicked on card.
	console.log(cardMovieId);

	const handleDialogClose = () => {
		dispatch(setMovieModalOpen(false));
	}

	return (
		<div>
			<React.Fragment>
				{!cardMovieId
					?
					<h3>There is no video for this movie !</h3>

					: (
						<Dialog
							open={isDialogOpen}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogContent
								sx={{ width: 450, p: 0.5, backgroundColor: 'GrayText' }}
							>
								<VideoBackground movieId={cardMovieId} fromCardModal={true} />
							</DialogContent>
							<DialogActions>
								<Button onClick={handleDialogClose}>Cancel</Button>
							</DialogActions>
						</Dialog>
					)
				}
			</React.Fragment>

		</div>
	);
}
