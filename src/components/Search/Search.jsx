import { useState, useEffect } from 'react';

import './styles.module.css';

export default function Search() {
	const [searchTerm, setSearchTerm] = useState('');

	async function getComicByTitle() {
		const response = await api.get(`/comics?title=${searchTerm}`);
		const filteredComics = response.data.data.results;
		console.log(filteredComics);
	}

	useEffect(() => {
		getComicByTitle;
	}, [searchTerm]);

	return (
		<input
			type='search'
			placeholder='Pesquise aqui'
			//value={searchTerm}
			onBlur={(event) => setSearchTerm(event.target.value)}
		/>
	);
}
