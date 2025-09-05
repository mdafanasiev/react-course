import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(({ actionName, onClick}, ref) => {
	return (
		<>
			<button ref= {ref} className={styles.button} onClick={onClick}>
				{actionName}
			</button>
		</>
	);
});

export default Button;
