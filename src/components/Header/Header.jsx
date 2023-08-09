import styles from './styles.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<h1> JuntoFlix</h1>
				<input type='' placeholder='Pesquise aqui' />
			</div>
		</header>
	);
}
