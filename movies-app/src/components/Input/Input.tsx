import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(({ icon, ...props }, ref) => {
	if (icon === undefined) {
		return (
			<div className={styles['input-wrapper']}>
				<input
					ref={ref}
					{...props}
				/>
			</div>
		);
	}

	return (
		<div className={cn(styles['input-wrapper'], styles['input-with-icon'])}>
			<img src={icon.src} alt={icon.alt} />
			<input
				ref={ref}
				{...props}
			/>
		</div>
	);
});

export default Input;
