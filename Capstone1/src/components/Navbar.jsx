import styles from "../styles/Navbar.module.css";
import { BookSearch } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import logo from '../assets/logo.png'
function Navbar(){
    return(
        <nav className={styles.nav}>

            <div className={styles.div1}>
                <img className={styles.logo} src={logo}/>
                <p className={styles.p}>The Learning Tree</p>
            </div>
            <button className={styles.button}>
                <BookSearch color="#000000" size={55}/>
            </button>
            <div className={styles.div2}>
                <p className={styles.p}>Guest</p>
                <CircleUserRound color="#000000" size={65}/>
            </div>
        </nav>
    );
}
export default Navbar;
