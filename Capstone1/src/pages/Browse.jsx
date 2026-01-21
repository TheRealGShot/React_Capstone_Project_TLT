import styles from '../styles/pages/Browse.module.css';
import Book from '../components/Book.jsx';
import bookCover from '../assets/bookCover.png'
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import books from '../data/books';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Browse(){
    const { isDarkMode } = useContext(ThemeContext);
    const [allBooks, setAllBooks] = useState(books);

    useEffect(() => {
        const globalAddedBooks = JSON.parse(localStorage.getItem('globalAddedBooks') || '[]');
        setAllBooks([...books, ...globalAddedBooks]);
    }, []);

    return(
        <div className={`${styles.desktop} ${isDarkMode ? styles.darkMode : ''}`}>
            <h1 className={`${styles.h1} ${isDarkMode ? styles.darkMode : ''}`}>Library</h1>
            <div className={styles.div}>
                {allBooks.map((b) => (
                    <Book key={b.id} book={b} />
                ))}
            </div>
        </div>
    );
}
export default Browse;