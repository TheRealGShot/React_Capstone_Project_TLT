import styles from '../styles/pages/Borrow.module.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import books from '../data/books';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Borrow() {
    const { isDarkMode } = useContext(ThemeContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const bookId = Number(id);
    const [book, setBook] = useState(null);

    const [borrowDate, setBorrowDate] = useState('');
    const [isBorrowed, setIsBorrowed] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        let foundBook = books.find((b) => b.id === bookId);
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

    useEffect(() => {
        try {
            const cu = JSON.parse(localStorage.getItem('currentUser')) || null;
            setCurrentUser(cu);
            if (!cu) {
                setIsBorrowed(false);
                return;
            }
            const userKey = cu.email;
            const data = JSON.parse(localStorage.getItem('borrowedBooks') || '{}');
            setIsBorrowed(Boolean(data[userKey] && data[userKey][bookId]));
        } catch (e) {
            setCurrentUser(null);
            setIsBorrowed(false);
        }
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

    function handleBorrow(e) {
        e.preventDefault();
        if (isBorrowed) return;
        if (!currentUser) {
            alert('You must be logged in to borrow a book');
            navigate('/login');
            return;
        }
        if (!borrowDate) {
            alert('Please enter date of borrow');
            return;
        }
        const userKey = currentUser.email;
        const data = JSON.parse(localStorage.getItem('borrowedBooks') || '{}');
        if (!data[userKey]) data[userKey] = {};
        data[userKey][bookId] = { borrowDate };
        localStorage.setItem('borrowedBooks', JSON.stringify(data));
        setIsBorrowed(true);
        navigate('/browse');
    }

    return(
        <div className={`${styles.desktop} ${isDarkMode ? styles.darkMode : ''}`}>
            <div className={`${styles.box} ${isDarkMode ? styles.darkMode : ''}`}>
                <div className={styles.flexor}>
                    <div className={`${styles.box1} ${isDarkMode ? styles.darkMode : ''}`}>
                        <p className={`${styles.p} ${isDarkMode ? styles.darkMode : ''}`}>Availibility: <span style={{color: isBorrowed ? 'red' : 'green', fontWeight:700}}>{isBorrowed ? 'Not Available' : 'Available'}</span></p>
                    </div>
                        <form className={`${styles.form1} ${isDarkMode ? styles.darkMode : ''}`} onSubmit={handleBorrow}>
                            <label>Date of Borrow:</label> 
                                <input 
                                    type="date" 
                                    name="date-of-borrow" 
                                    placeholder='Enter Date' 
                                    className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
                                    value={borrowDate}
                                    onChange={(e) => setBorrowDate(e.target.value)}
                                /> 
                                <div style={{marginTop:12}}>
                                  <button className={`${styles.button} ${isDarkMode ? styles.darkMode : ''}`} type="submit" disabled={isBorrowed}>{isBorrowed ? 'Not Available' : 'Borrow'}</button>
                                </div>
                        </form>
                </div>
            </div>
        </div>
    );
}
export default Borrow;