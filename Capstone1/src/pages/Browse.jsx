import styles from '../styles/pages/Browse.module.css';
import Book from '../components/Book.jsx';
import tree from '../assets/tree.png'
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import books from '../data/books';
import { useEffect, useState } from 'react';

function Browse(){
    const [allBooks, setAllBooks] = useState(books);

    useEffect(() => {
        function getCurrentUser() {
            try {
                return JSON.parse(localStorage.getItem('currentUser')) || null;
            } catch (e) { return null; }
        }

        const cu = getCurrentUser();
        const userKey = cu ? cu.email : 'guest';
        const userAddedBooks = JSON.parse(localStorage.getItem('userAddedBooks') || '{}');
        const userBooks = userAddedBooks[userKey] || [];

        // Combine fake API books with user-added books
        setAllBooks([...books, ...userBooks]);
    }, []);

    return(
        <div className={styles.desktop}>
            <h1 className={styles.h1}>Library</h1>
            <div className={styles.div}>
                {allBooks.map((b) => (
                    <Book key={b.id} book={b} />
                ))}
            </div>
        </div>
    );
}
export default Browse;