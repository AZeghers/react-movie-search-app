import React from 'react'
import { Searchbar } from './components/Searchbar'
import { MoviesList } from './components/MoviesList'
import { MovieCard } from './components/MovieCard'
import { SearchProvider } from './hooks/useSearch'
import { MoviesProvider } from './hooks/useMovies'

function App() {
	return (
		<SearchProvider>
			<MoviesProvider>
				<div className="heading-wrapper">
					<div className="container">
						<h1>bonjour c'est moi le movie search</h1>
					</div>
				</div>
				<div className="searchbar-wrapper">
					<div className="container">
						<Searchbar />
					</div>
				</div>
				<div className="container">
					<MovieCard />
					<MoviesList />
				</div>
			</MoviesProvider>
		</SearchProvider>
	)
}

export default App
