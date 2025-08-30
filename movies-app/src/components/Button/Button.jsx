import styles from './Button.module.css';

function Button	({ actionName, onClick, ref}) {
	return (
		<>
			<button ref= {ref} className={styles.button} onClick={onClick}>
				{actionName}
			</button>
		</>
	);
}

export default Button;
