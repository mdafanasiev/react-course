import styles from './NavigationList.module.css';

function NavigationList({ children }) {
	return (
		<ul className={styles['nav-list']}>
			{children}
		</ul>
	);
}

export default NavigationList;
