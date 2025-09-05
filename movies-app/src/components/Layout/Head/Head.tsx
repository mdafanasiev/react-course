import NavigationBar from '../../NavigationBar/NavigationBar';
import styles from './Head.module.css';

function Head() {
	return (
		<div className={styles.head}>
			<NavigationBar />
		</div>
	);
}

export default Head;
