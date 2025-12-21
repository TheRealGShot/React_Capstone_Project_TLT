import bigTree from '../assets/bigTree.png'
import styles from '../styles/pages/Home.module.css';
import { Search } from 'lucide-react';
function Home(){
    return(
        <div className={styles.desktop}>
            <div className={styles.left}>
                <h1 className={styles.h1}>Welcome To The Tree</h1>
                <button className={styles.button}>
                    <Search color="#ffffff" size={35}/>
                    Explore Now!
                </button>
            </div>
            <div className={styles.right}>
                <img className={styles.bigTree} src={bigTree}/>
                <div className={styles.box}>
                    <h2 className={styles.h2}>The Learning Tree Library</h2>
                    <p className={styles.p}>
                        Over 100 Books to Borrow From! 
                        The library offers a wide collection 
                        of books that users can explore and learn 
                        from, covering different topics and interests. 
                        Visitors can easily find detailed information 
                        about each book and check whether it is available 
                        or currently borrowed. With an organized system 
                        and a welcoming atmosphere, the library makes 
                        discovering and enjoying books simple and exciting. 
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Home;