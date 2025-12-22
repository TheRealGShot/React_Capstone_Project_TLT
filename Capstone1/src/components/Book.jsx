import styles from '../styles/Book.module.css';
import tree from '../assets/tree.png'
import { Link } from 'react-router-dom';
function Book({ book }){
    return(
        <div className={styles.div1}>
            <img className={styles.img} src={tree} alt={book?.title || "book"}/>
            <div className={styles.div2}>
                <p className={styles.p}>
                    {book?.title || 'Book Title'}
                </p>
                <Link to={`/preview/${book?.id ?? ''}`} className={styles.link}>
                <button className={styles.button}>View More</button>
                </Link>
            </div>
        </div>
    );
}
export default Book;