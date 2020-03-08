import axios from 'axios'

const apiKey = 'YOUR API KEY HERE'

const fetchMovieList = async (query) => {
	const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
	try {
		const res = await axios.get(apiUrl)
		return res.data.results.filter((movie) =>
			movie.original_title.toLowerCase().includes(query.toLowerCase()),
		)
	} catch (err) {
		console.error(err)
		return []
	}
}

export default { fetchMovieList }
