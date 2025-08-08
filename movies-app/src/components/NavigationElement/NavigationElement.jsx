import styles from './NavigationElement.module.css';

function NavigationElement({ text }) {
	return (
		<li>
			<a className={styles['nav-element']} href="#">
				{text}
			</a>
		</li>
	);
}

export default NavigationElement;
