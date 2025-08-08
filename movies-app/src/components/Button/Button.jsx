import styles from './Button.module.css';

function Button	({ actionName, onClick}) {
	return (
		<>
			<button className={styles.button} onClick={onClick}>
				{actionName}
			</button>
		</>
	);
}

export default Button;
