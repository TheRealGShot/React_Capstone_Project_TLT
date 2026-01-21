import styles from '../styles/pages/Preview.module.css';
import { Link, useParams } from 'react-router-dom';
import books from '../data/books';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Preview(){
    const { isDarkMode } = useContext(ThemeContext);
    const { id } = useParams();
    const bookId = Number(id);
    const [book, setBook] = useState(null);

    useEffect(() => {
        // First check fake API books
        let foundBook = books.find((b) => b.id === bookId);
        
        // If not found, check user-added books
        if (!foundBook) {
            try {
                const cu = JSON.parse(localStorage.getItem('currentUser')) || null;
                const userKey = cu ? cu.email : 'guest';
                const userAddedBooks = JSON.parse(localStorage.getItem('userAddedBooks') || '{}');
                const userBooks = userAddedBooks[userKey] || [];
                foundBook = userBooks.find((b) => b.id === bookId);
            } catch (e) {}
        }
        
        setBook(foundBook || null);
    }, [bookId]);

    if (!book) {
        return (
            <div className={`${styles.desktop} ${isDarkMode ? styles.darkMode : ''}`}>
                <div className={`${styles.box} ${isDarkMode ? styles.darkMode : ''}`}>
                    <h2 className={`${styles.h1} ${isDarkMode ? styles.darkMode : ''}`}>Book not found</h2>
                    <Link to="/browse" className={styles.link}>
                      <button className={`${styles.button} ${isDarkMode ? styles.darkMode : ''}`}>Back to Library</button>
                    </Link>
                </div>
            </div>
        );
    }

    return(
        <div className={`${styles.desktop} ${isDarkMode ? styles.darkMode : ''}`}>
            <div className={`${styles.box} ${isDarkMode ? styles.darkMode : ''}`}>
                <div className={styles.flexor1}>
                    <div className={styles.flexor2}> 
                        <h1 className={`${styles.h1} ${isDarkMode ? styles.darkMode : ''}`}>{book.title}</h1>
                        <h1 className={`${styles.h1} ${isDarkMode ? styles.darkMode : ''}`}>By: {book.author}</h1>
                        <h1 className={`${styles.h1} ${isDarkMode ? styles.darkMode : ''}`}>Published: {book.publishDate}</h1>
                    </div>
                    <div className={styles.flexor2}>
                    <p className={`${styles.p} ${isDarkMode ? styles.darkMode : ''}`}>Description:</p>
                        <div className={styles.flexor3}>
                            <p className={`${styles.p} ${isDarkMode ? styles.darkMode : ''}`}>{book.description}</p>
                        </div>
                    </div>
                </div>
                <Link to = {`/borrow/${book.id}`} className={styles.link}>
                <button className={`${styles.button} ${isDarkMode ? styles.darkMode : ''}`}>
                    Borrow Now!
                </button>
                </Link>
            </div>
        </div>
    );
}
export default Preview;
