import styles from '../styles/Book.module.css';
import { useContext } from 'react';
import tree from '../assets/tree.png'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Book({ book }){
    const { isDarkMode } = useContext(ThemeContext);
    
    return(
        <div className={styles.div1}>
            <img className={`${styles.img} no-invert`} src={tree} alt={book?.title || "book"}/>
            <div className={`${styles.div2} ${isDarkMode ? styles.darkMode : ''}`}>
                <p className={styles.p}>
                    {book?.title || 'Book Title'}
                </p>
                <Link to={`/preview/${book?.id ?? ''}`} className={styles.link}>
                <button className={`${styles.button} ${isDarkMode ? styles.darkMode : ''}`}>View More</button>
                </Link>
            </div>
        </div>
    );
}
export default Book;