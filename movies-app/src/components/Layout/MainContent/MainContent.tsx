import styles from './MainContent.module.css';
import { MainContentProps } from './MainContent.props';

function MainContent( { children }: MainContentProps ) {
	return <div className={styles['main-content']}>{children}</div>;
}

export default MainContent;
