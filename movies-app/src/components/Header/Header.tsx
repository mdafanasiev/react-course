import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

function Header({title} : HeaderProps) {
	return (
		<h1 className={styles.header}>
			{title}
		</h1>
	);
}

export default Header;
