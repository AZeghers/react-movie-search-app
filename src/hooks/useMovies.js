import { useState } from 'react'
import constate from 'constate'
import api from '../utils/api'

const useMovies = () => {
	const [movies, setMovies] = useState([])

	const fillMovieList = async (query) => {
		if (query) {
			const res = await api.fetchMovieList(query)
			setMovies(res)
		} else {
			setMovies([])
		}
	}

	return { movies, fillMovieList }
}

export const [MoviesProvider, useMoviesContext] = constate(useMovies)
