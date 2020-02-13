import React from 'react'
import { Searchbar } from './components/Searchbar'
import { MovieList } from './components/MovieList'
import { MovieCard } from './components/MovieCard'
import { SearchProvider } from './hooks/useSearch'
import { MoviesProvider } from './hooks/useMovies'

function App() {
	return (
		<SearchProvider>
			<MoviesProvider>
				<div className="heading-wrapper">
					<div className="container">
						<h1>Movie Search App</h1>
					</div>
				</div>
				<div className="searchbar-wrapper">
					<div className="container">
						<Searchbar />
					</div>
				</div>
				<div className="container">
					<MovieCard />
					<MovieList />
				</div>
			</MoviesProvider>
		</SearchProvider>
	)
}

export default App
