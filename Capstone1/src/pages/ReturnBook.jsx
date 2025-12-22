import styles from '../styles/pages/ReturnBook.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import books from '../data/books';

function ReturnBook(){
    const [title, setTitle] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [signature, setSignature] = useState('');
    const navigate = useNavigate();

    function getCurrentUser() {
        try {
            return JSON.parse(localStorage.getItem('currentUser')) || null;
        } catch (e) { return null; }
    }

    function getUserKey() {
        const cu = getCurrentUser();
        return cu && cu.email ? cu.email : null;
    }

    function getExpectedSignature() {
        const cu = getCurrentUser();
        if (!cu) return '';
        return `${cu.fname} ${cu.lname}`.trim();
    }

    function handleReturn(e) {
        e.preventDefault();

        if (!title) { alert('Please enter the book title'); return; }
        if (!returnDate) { alert('Please enter the return date'); return; }
        if (!signature) { alert('Please enter your digital signature'); return; }

        const cu = getCurrentUser();
        if (!cu) {
            alert('You must be logged in to return a book');
            navigate('/login');
            return;
        }

        // find book by exact title (case-sensitive as requested)
        const book = books.find(b => b.title === title);
        if (!book) { alert('No book found with that exact title'); return; }

        const expectedSig = getExpectedSignature();
        if (signature !== expectedSig) {
            alert(`Signature must match the current user name: ${expectedSig}`);
            return;
        }

        // check borrowedBooks for this user
        const userKey = getUserKey();
        const data = JSON.parse(localStorage.getItem('borrowedBooks') || '{}');
        if (!userKey || !data[userKey] || !data[userKey][book.id]) {
            alert('This book is not marked as borrowed for your account');
            return;
        }

        // remove the borrowed entry for this user and book
        delete data[userKey][book.id];
        // clean up empty object
        if (Object.keys(data[userKey]).length === 0) delete data[userKey];
        localStorage.setItem('borrowedBooks', JSON.stringify(data));

        alert('Book returned successfully. It is now available for your account.');
        navigate('/browse');
    }

    return(
        <div className={styles.desktop}>
            <h1 className={styles.h1}>Returning A Book?</h1>
            <div className={styles.box}>
                <div className={styles.left}>
                        <form className={styles.form3} onSubmit={handleReturn}>
                        <label>Book Title</label> 
                            <input type="text" name="book-title" placeholder='Enter Book Title' className={styles.input} 
                                value={title} onChange={(e) => setTitle(e.target.value)}
                            /> 
                        <label>Date of Return:</label> 
                            <input type="date" name="date-of-return" placeholder='Enter Date' className={styles.input} 
                                value={returnDate} onChange={(e) => setReturnDate(e.target.value)}
                            /> 
                        <label style={{marginTop:12}}>Digital Signature</label>
                            <input type="text" name="signature" placeholder='Enter Signature (Full Name)' className={styles.input} 
                                value={signature} onChange={(e) => setSignature(e.target.value)}
                            /> <br/>
                        <button className={styles.button} type="submit">
                            Return
                        </button>
                        </form>
                </div>
                <div className={styles.right}>
                    <div className={styles.box2}>
                        <p className={styles.p}>I promise that any damage caused to the
                             books will be paid for out of the cost
                              of ones own money.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ReturnBook;