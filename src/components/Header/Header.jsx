import Search from '../Search';
import styles from './styles.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<h1> JuntoFlix</h1>
				<Search />
			</div>
		</header>
	);
}
