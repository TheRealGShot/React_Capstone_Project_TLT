import styles from '../styles/Drop.module.css';
import { Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
function Drop({setOpen2, setOpen1}){
    return(
        <div className={styles.div}>
            <Link to ="/settings" onClick={() => { setOpen2 && setOpen2(false); setOpen1 && setOpen1(false); }}>
                <div className={styles.box}>
                    <Settings color="#000000" size={55}/>
                    <p className={styles.p} >Settings</p>
                </div>
            </Link>
        </div>
    );
}
export default Drop;