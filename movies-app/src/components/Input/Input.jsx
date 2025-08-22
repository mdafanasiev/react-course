import styles from './Input.module.css';
import cn from 'classnames';

function Input({ type, placeHolder, icon}) {
	if (icon === undefined) {
		return (
			<div className={styles['input-wrapper']}>
				<input type={type} placeholder={placeHolder} />
			</div>
		);
	}

	return (
		<div className={cn(styles['input-wrapper'], styles['input-with-icon'])}>
			<img src={icon.src} alt={icon.alt} />
			<input type={type} placeholder={placeHolder} />
		</div>
	);
}

export default Input;
