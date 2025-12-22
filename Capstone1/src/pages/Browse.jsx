import styles from '../styles/pages/Browse.module.css';
import Book from '../components/Book.jsx';
function Browse(){
    return(
        <div className={styles.desktop}>
            <Book/>
        </div>
    );
}
export default Browse;