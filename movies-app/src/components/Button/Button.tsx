import { forwardRef } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

const Button =
  forwardRef<HTMLButtonElement, ButtonProps>(function (
    { actionName, ...props },
    ref
  ) {
    return (
      <button ref={ref} className={styles.button} {...props}>
        {actionName}
      </button>
    );
  });

export default Button;
