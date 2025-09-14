import styles from './NavigationElement.module.css';
import { NavigationElementProps } from './NavigationElement.props';

function NavigationElement({ text }: NavigationElementProps) {
	return (
    <li className={styles["nav-element"]}>
      {text}
    </li>
  );
}

export default NavigationElement;
