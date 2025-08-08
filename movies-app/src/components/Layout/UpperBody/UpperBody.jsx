import styles from './UpperBody.module.css';

function UpperBody({ children }) {
	return <div className={styles['upper-body']}>{children}</div>;
}

export default UpperBody;
