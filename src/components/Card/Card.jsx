import styles from './styles.module.css';

export function Card(props) {
	return (
		<div className={styles['card-container']}>
			<span>{props.name}</span>
		</div>
	);
}
