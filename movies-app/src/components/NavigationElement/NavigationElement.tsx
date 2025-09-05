import styles from './NavigationElement.module.css';
import { NavigationElementProps } from './NavigationElement.props';

function NavigationElement({ text, ...props }: NavigationElementProps) {
	return (
		<li>
			<a className={styles['nav-element']} href="#" {...props}>
				{text}
			</a>
		</li>
	);
}

export default NavigationElement;
