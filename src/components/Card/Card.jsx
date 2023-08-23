import styles from './styles.module.css';

export function Card({ props }) {
	return (
		<div className={styles['card-container']}>
			<div className={styles['card-image']}>
				<img
					src='https://baudashqs.com/wp-content/uploads/2022/12/20221223_192632.jpg'
					alt='capa da HQ'
				/>
			</div>
			<div className={styles['card-title']}>
				<h2>{props.title}</h2>
			</div>
		</div>
	);
}
