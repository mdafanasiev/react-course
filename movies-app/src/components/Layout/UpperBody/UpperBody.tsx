import styles from './UpperBody.module.css';
import { UpperBodyProps } from './UpperBody.props';

function UpperBody({ children }: UpperBodyProps) {
	return <div className={styles['upper-body']}>{children}</div>;
}

export default UpperBody;
