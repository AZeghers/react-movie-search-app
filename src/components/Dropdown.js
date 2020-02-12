import React from 'react'
import { useSearchContext } from '../hooks/useSearch'
import '../style/dropdown.scss'

export const Dropdown = () => {
	const { query, results, setQuery, fillList } = useSearchContext()

	const handleOnClick = (e) => {
		setQuery(e.target.textContent)
		fillList()
	}

	if (!results.length) return <div />

	return (
		<div className="dropdown-container">
			{results.map(({ id, original_title }) => (
				<div className="dropdown-item" key={id} onMouseDown={handleOnClick}>
					{original_title}
				</div>
			))}
		</div>
	)
}
