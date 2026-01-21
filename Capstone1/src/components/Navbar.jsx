import styles from "../styles/Navbar.module.css";
import { BookSearch } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import logo from '../assets/logo.png'
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Navbar({open1, setOpen1, open2, setOpen2}){
    const [userName, setUserName] = useState('Guest User');
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        const updateUserName = () => {
            const currentUser = localStorage.getItem('currentUser');
            if (currentUser) {
                try {
                    const user = JSON.parse(currentUser);
                    setUserName(`${user.fname} ${user.lname}`);
                } catch (e) {
                    setUserName('Guest User');
                }
            } else {
                setUserName('Guest User');
            }
        };

        // initial
        updateUserName();
        // listen for same-tab auth changes
        window.addEventListener('authChange', updateUserName);
        return () => window.removeEventListener('authChange', updateUserName);
    }, []);

    return(
        <nav className={`${styles.nav} ${isDarkMode ? styles.navDark : ''}`}>
            <Link to ="">
            <div className={styles.div1}>
                <img className={styles.logo} src={logo}/>
                <p className={`${styles.p} ${isDarkMode ? styles.pDark : ''}`}>The Learning Tree</p>
            </div>
            </Link>
            <button className={`${styles.button} ${isDarkMode ? styles.buttonDark : ''}`} onClick={()=> setOpen1(!open1)}>
                {!open1 && <BookSearch color={isDarkMode ? "#ffffff" : "#000000"} size={55}/>}
                {open1 && <BookOpenText color={isDarkMode ? "#ffffff" : "#000000"} size={55}/>}
                
            </button>

            <div className={styles.div2}>
                <button className={`${styles.drop} ${isDarkMode ? styles.dropDark : ''}`} onClick={()=> setOpen2(!open2)}>
                    {!open2 && <ChevronDown color={isDarkMode ? "#ffffff" : "#000000"}/>}
                    {open2 && <ChevronUp color={isDarkMode ? "#ffffff" : "#000000"}/>}
                    {userName}
                </button>
                <CircleUserRound color={isDarkMode ? "#ffffff" : "#000000"} size={65}/>
            </div>
        </nav>
    );
}
export default Navbar;
