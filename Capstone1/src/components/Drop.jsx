import styles from '../styles/Drop.module.css';
import { Settings } from 'lucide-react';
function Drop(){
    return(
        <div className={styles.div}>
            <Settings color="#000000" size={55}/>
            Settings
        </div>
    );
}
export default Drop;