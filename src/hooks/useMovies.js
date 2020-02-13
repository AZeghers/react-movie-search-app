import { useState } from 'react'
import constate from 'constate'
import api from '../utils/api'

const apiImageLookupBaseUrl = 'https://image.tmdb.org/t/p/w154'

const useMovies = () => {
	const [movies, setMovies] = useState([])
	const [currMovie, setCurrMovie] = useState({})
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
		const { overview, title, vote_average } = movie
		const poster = `${apiImageLookupBaseUrl}${movie.poster_path}`
		const moviePayload = { overview, poster, title, vote_average }

		setCurrMovie(moviePayload)
		setCardIsOpen(true)
	}

	return {
		cardIsOpen,
		setCardIsOpen,
		currMovie,
		fillMovieList,
		movies,
		updateCurrentMovie,
	}
}

export const [MoviesProvider, useMoviesContext] = constate(useMovies)
