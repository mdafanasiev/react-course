import NavigationBar from '../../NavigationBar/NavigationBar';
import styles from './Head.module.css';

function Head({users, dispatchUsers}) {
	return (
		<div className={styles.head}>
			<NavigationBar users={users} dispatchUsers={dispatchUsers}/>
		</div>
	);
}

export default Head;
