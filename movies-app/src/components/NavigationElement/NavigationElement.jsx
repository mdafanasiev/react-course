import styles from './NavigationElement.module.css';

function NavigationElement({ text, onClick }) {
	return (
		<li>
			<a className={styles['nav-element']} href="#" onClick={onClick}>
				{text}
			</a>
		</li>
	);
}

export default NavigationElement;
