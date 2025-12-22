import styles from '../styles/pages/Borrow.module.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import books from '../data/books';

function Borrow() {
    const { id } = useParams();
    const navigate = useNavigate();
    const bookId = Number(id);
    const book = books.find((b) => b.id === bookId);

    const [borrowDate, setBorrowDate] = useState('');
    const [isBorrowed, setIsBorrowed] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('borrowedBooks') || '{}');
        setIsBorrowed(Boolean(data[bookId]));
    }, [bookId]);

    if (!book) {
        return (
            <div className={styles.desktop}>
                <div className={styles.box}>
                    <h2 className={styles.h1}>Book not found</h2>
                    <Link to="/browse" className={styles.link}>
                      <button className={styles.button}>Back to Library</button>
                    </Link>
                </div>
            </div>
        );
    }

    function handleBorrow(e) {
        e.preventDefault();
        if (isBorrowed) return;
        if (!borrowDate) {
            alert('Please enter date of borrow');
            return;
        }
        const data = JSON.parse(localStorage.getItem('borrowedBooks') || '{}');
        data[bookId] = { borrowDate };
        localStorage.setItem('borrowedBooks', JSON.stringify(data));
        setIsBorrowed(true);
        navigate('/browse');
    }

    return(
        <div className={styles.desktop}>
            <div className={styles.box}>
                <div className={styles.flexor}>
                    <div className={styles.box1}>
                        <p className={styles.p}>Availibility: <span style={{color: isBorrowed ? 'red' : 'green', fontWeight:700}}>{isBorrowed ? 'Not Available' : 'Available'}</span></p>
                    </div>
                        <form className={styles.form1} onSubmit={handleBorrow}>
                            <label>Date of Borrow:</label> 
                                <input 
                                    type="date" 
                                    name="date-of-borrow" 
                                    placeholder='Enter Date' 
                                    className={styles.input}
                                    value={borrowDate}
                                    onChange={(e) => setBorrowDate(e.target.value)}
                                /> 
                                <div style={{marginTop:12}}>
                                  <button className={styles.button} type="submit" disabled={isBorrowed}>{isBorrowed ? 'Not Available' : 'Borrow'}</button>
                                </div>
                        </form>
                </div>
            </div>
        </div>
    );
}
export default Borrow;