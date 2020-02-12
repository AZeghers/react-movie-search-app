import axios from 'axios'

const apiKey = 'f3a05026119d09f84c9aaef927a18ac2'
const apiImageLookupBaseUrl = 'https://image.tmdb.org/t/p/w154'

const fetchMovieList = async (query) => {
	const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
	const res = await axios.get(apiUrl)
	return res.data.results.filter((movie) =>
		movie.original_title.toLowerCase().includes(query.toLowerCase()),
	)
}

export default { fetchMovieList }
