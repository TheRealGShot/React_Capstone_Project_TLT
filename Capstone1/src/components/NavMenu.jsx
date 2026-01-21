import styles from "../styles/NavMenu.module.css"; 
import { useContext } from 'react';
import { BookPlus } from 'lucide-react';
import { BookUp } from 'lucide-react';
import { Search } from 'lucide-react';
import { LogIn } from 'lucide-react';

import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext.jsx';

function NavMenu({setOpen1}){
    const { isDarkMode } = useContext(ThemeContext);
    
    return (
        <div className={`${styles.navMenu} ${isDarkMode ? styles.navMenuDark : ''}`}>
            <Link to='/addBook' onClick={() => setOpen1 && setOpen1(false)}>
            <button className={`${styles.button} ${isDarkMode ? styles.buttonDark : ''}`}>
                <BookPlus color={isDarkMode ? "#ffffff" : "#000000"} size={85}/>
                <p>Add A New Book</p>
            </button>
            </Link>
            <Link to ="/returnBook" onClick={() => setOpen1 && setOpen1(false)}>
            <button className={`${styles.button} ${isDarkMode ? styles.buttonDark : ''}`}>
                <BookUp color={isDarkMode ? "#ffffff" : "#000000"} size={85}/>
                <p>Return A Book</p>
            </button>
            </Link>
            <Link to = '/browse' onClick={() => setOpen1 && setOpen1(false)}>
            <button className={`${styles.button} ${isDarkMode ? styles.buttonDark : ''}`}>
                <Search color={isDarkMode ? "#ffffff" : "#000000"} size={85}/>
                <p>Browse</p>
            </button>
            </Link>
            <Link to ="/login" onClick={() => setOpen1 && setOpen1(false)}>
                <button className={`${styles.button} ${isDarkMode ? styles.buttonDark : ''}`}>
                    <LogIn color={isDarkMode ? "#ffffff" : "#000000"} size={85}/>
                    <p>Log In</p>
                </button>
            </Link>
        </div>
    );
}
export default NavMenu;