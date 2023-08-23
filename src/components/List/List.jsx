import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Card } from '../Card/Card';
import styles from './styles.module.css';

export default function List() {
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
		<div className={styles['list-container']}>
			{characters.map((character) => (
				<Card props={character} />
			))}
		</div>
	);
}
