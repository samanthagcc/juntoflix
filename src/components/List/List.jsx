import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import Card from '../Card';
import styles from './styles.module.css';

export default function List() {
	const [comics, setComics] = useState([]);

	async function getComics() {
		const response = await api.get('/comics');
		const listOfComics = response.data.data.results;
		setComics(listOfComics);
	}

	useEffect(() => {
		getComics();
	}, []);

	return (
		<div className={styles['list-container']}>
			{comics.map((comic) => (
				<Card props={comic} />
			))}
		</div>
	);
}
