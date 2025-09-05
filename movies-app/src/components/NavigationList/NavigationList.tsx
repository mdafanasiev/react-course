import styles from './NavigationList.module.css';
import { NavigationListProps } from './NavigationList.props';

function NavigationList({ children }: NavigationListProps) {
	return (
		<ul className={styles['nav-list']}>
			{children}
		</ul>
	);
}

export default NavigationList;
