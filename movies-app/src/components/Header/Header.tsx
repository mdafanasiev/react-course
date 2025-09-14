import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import cn from 'classnames';

function Header({title, appearance} : HeaderProps) {
	return (
		<h1 className={cn(styles.header, {
			[styles.small]: appearance === 'small',
			[styles.medium]: appearance === 'medium',
			[styles.big]: appearance === 'big',
		})}>
			{title}
		</h1>
	);
}

export default Header;
