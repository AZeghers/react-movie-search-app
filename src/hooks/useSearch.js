import { useEffect, useState } from 'react'
import constate from 'constate'
import api from '../utils/api'

const useSearch = () => {
	const [query, setQuery] = useState('')
	const [suggestions, setSuggestions] = useState([])

	useEffect(() => {
		const fetchMovies = async () => {
			const res = await api.fetchMovieList(query)
			setSuggestions(res)
		}
		if (query) fetchMovies()
		else setSuggestions([])
	}, [query])

	return { query, setQuery, suggestions }
}

export const [SearchProvider, useSearchContext] = constate(useSearch)
