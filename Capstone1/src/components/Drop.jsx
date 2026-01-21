import styles from '../styles/Drop.module.css';
import { useContext } from 'react';
import { Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Drop({setOpen2, setOpen1}){
    const { isDarkMode } = useContext(ThemeContext);
    
    return(
        <div className={`${styles.div} ${isDarkMode ? styles.divDark : ''}`}>
            <Link to ="/settings" onClick={() => { setOpen2 && setOpen2(false); setOpen1 && setOpen1(false); }}>
                <div className={styles.box}>
                    <Settings color={isDarkMode ? "#ffffff" : "#000000"} size={55}/>
                    <p className={`${styles.p} ${isDarkMode ? styles.pDark : ''}`}>Settings</p>
                </div>
            </Link>
        </div>
    );
}
export default Drop;