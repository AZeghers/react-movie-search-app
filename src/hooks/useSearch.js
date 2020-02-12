import { useState, useEffect } from 'react'
import constate from 'constate'
import axios from 'axios'

const apiKey = 'f3a05026119d09f84c9aaef927a18ac2'
const apiImageLookupBaseUrl = 'https://image.tmdb.org/t/p/w154'

const useSearch = () => {
	const [results, setResults] = useState([])
	const [movies, setMovies] = useState([])
	const [query, setQuery] = useState('')

	useEffect(() => {
		const queryDatabase = async () => {
			const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
			const res = await axios.get(apiUrl)
			const movies = res.data.results.filter((movie) =>
				movie.original_title.toLowerCase().includes(query.toLowerCase()),
			)
			setResults(movies)
		}

		if (query) queryDatabase()
		else setResults([])
	}, [query])

	const fillList = () => setMovies(results)

	return { fillList, movies, query, results, setQuery }
}

export const [SearchProvider, useSearchContext] = constate(useSearch)
