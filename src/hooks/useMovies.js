import { useState } from 'react'
import constate from 'constate'
import api from '../utils/api'

const apiImageLookupBaseUrl = 'https://image.tmdb.org/t/p/w300'
const noPosterUrl =
	'https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Ffrazerpromo.com%2Fthumbnail_Images%2Fno_image.png&sp=ecba2a87aa7a26f47a2043417f254dce&anticache=675536'

const useMovies = () => {
	const [movies, setMovies] = useState([])
	const [selectedMovie, setSelectedMovie] = useState({})
	const [cardIsOpen, setCardIsOpen] = useState(false)

	const fillMovieList = async (query) => {
		if (query) {
			const res = await api.fetchMovieList(query)
			setMovies(res)
		} else {
			setMovies([])
		}
	}

	const updateCurrentMovie = (movie) => {
		const { original_title, overview, title, vote_average } = movie
		const poster = movie.poster_path
			? `${apiImageLookupBaseUrl}${movie.poster_path}`
			: noPosterUrl
		const moviePayload = {
			original_title,
			overview,
			poster,
			title,
			vote_average,
		}

		setSelectedMovie(moviePayload)
		setCardIsOpen(true)
	}

	return {
		cardIsOpen,
		setCardIsOpen,
		selectedMovie,
		fillMovieList,
		movies,
		updateCurrentMovie,
	}
}

export const [MoviesProvider, useMoviesContext] = constate(useMovies)
