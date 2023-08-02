import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export default function ListOfCharacters() {
	const [characters, setCharacters] = useState([]);

	async function getCharacters() {
		const response = await api.get('/characters');
		const listofCharacters = response.data.data.results;
		setCharacters(listofCharacters);
	}

	useEffect(() => {
		getCharacters();
	}, []);

	return (
		<ul>
			{characters.map((character) => (
				<li>{character.name}</li>
			))}
		</ul>
	);
}
