import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(({ type, placeHolder, icon, onChange }, ref) => {
	if (icon === undefined) {
		return (
			<div className={styles['input-wrapper']}>
				<input
					ref={ref}
					type={type}
					placeholder={placeHolder}
					onChange={onChange}
				/>
			</div>
		);
	}

	return (
		<div className={cn(styles['input-wrapper'], styles['input-with-icon'])}>
			<img src={icon.src} alt={icon.alt} />
			<input
				ref={ref}
				type={type}
				placeholder={placeHolder}
				onChange={onChange}
			/>
		</div>
	);
});

export default Input;
