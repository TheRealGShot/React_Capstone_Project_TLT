import styles from '../styles/Book.module.css';
import tree from '../assets/tree.png'
function Book(){
    return(
        <div className={styles.div1}>
            <img className={styles.img} src={tree} alt="tree"/>
            <div className={styles.div2}>
                <p className={styles.p}>
                    Book Title 
                </p>
                <button className={styles.button}>View More</button>
            </div>
        </div>
    );
}
export default Book;