import styles from './styles.module.css';

export function Card({ props }) {
	return (
		<div className={styles['card-container']}>
			<div className={styles['card-image']}>
				<img src='' alt='capa da HQ' />
			</div>
			<div className={styles['card-title']}>
				<h2>{props.title}</h2>
			</div>
		</div>
	);
}
