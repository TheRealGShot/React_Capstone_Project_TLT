import styles from '../styles/Drop.module.css';
import { Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
function Drop(){
    return(
        <div className={styles.div}>
            <Link to ="/settings">
                <div className={styles.box}>
                    <Settings color="#000000" size={55}/>
                    <p className={styles.p} >Settings</p>
                </div>
            </Link>
        </div>
    );
}
export default Drop;