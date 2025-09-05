import styles from './Body.module.css';
import { BodyProps } from './Body.props';

function Body( {children}: BodyProps) {
	return ( 
		<div className={styles.body}>
			{children}
		</div>
	);
}

export default Body;
