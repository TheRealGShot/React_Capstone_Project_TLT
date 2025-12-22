import styles from '../styles/pages/Browse.module.css';
import Book from '../components/Book.jsx';
import tree from '../assets/tree.png'
import { Plus } from 'lucide-react';

function Browse(){
    return(
        <div className={styles.desktop}>
            <h1 className={styles.h1}>Library</h1>
            <div className={styles.div}>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <div className={styles.placeHolder}></div>
                <div className={styles.div1}>
                    <img className={styles.img} src={tree} alt="tree"/>
                    <div className={styles.div2}>
                     <p className={styles.p1}>
                              Add Book
                    </p>
                    
                    <button className={styles.button}>
                        <Plus className={styles.plus} color="white"/>
                    </button>

                    </div>
                </div>

            </div>
        </div>
    );
}
export default Browse;