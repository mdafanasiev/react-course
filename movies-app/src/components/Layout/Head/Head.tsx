import { Outlet } from 'react-router-dom';
import NavigationBar from '../../NavigationBar/NavigationBar';
import styles from './Head.module.css';

function Head() {
	return (
    <div>
      <div className={styles.head}>
          <NavigationBar />
      </div>
      <div>
          <Outlet />
      </div>
    </div>
  );
}

export default Head;
