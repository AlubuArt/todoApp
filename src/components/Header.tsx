import { title } from 'process';
import styles from './Header.module.css';

const Header = () => {

    return (
        
    <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
            <h1>GET THINGS DONE APP</h1>

        </div>
    </div>
    )
}

export default Header;