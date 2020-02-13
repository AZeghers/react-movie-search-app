import React from 'react'
import { useMoviesContext } from '../hooks/useMovies'
import '../style/movieCard.scss'

export const MovieCard = () => {
	const { cardIsOpen, selectedMovie, setCardIsOpen } = useMoviesContext()
	const {
		original_title,
		overview,
		poster,
		title,
		vote_average,
	} = selectedMovie

	const formattedTitle =
		title === original_title ? `${title}` : `${title} (${original_title})`

	const formattedDescription = overview ? overview : 'No description'

	const handleOnClick = () => {
		setCardIsOpen(false)
	}

	if (!cardIsOpen) return <div />
	return (
		<div>
			<div className="back-button">
				<div onClick={handleOnClick}>{'< Back'}</div>
			</div>
			<div className="movie-container">
				<div className="movie-info">
					<div>{formattedTitle}</div>
					<div>{`Rating: ${vote_average}`}</div>
					<div>{formattedDescription}</div>
				</div>
				<div className="image-container">
					<img className="movie-poster" src={poster} alt="movie-poster" />
				</div>
			</div>
		</div>
	)
}
