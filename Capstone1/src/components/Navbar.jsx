import styles from "../styles/Navbar.module.css";
import { BookSearch } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import logo from '../assets/logo.png'
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar({open1, setOpen1, open2, setOpen2}){
    return(
        <nav className={styles.nav}>
            <Link to ="">
            <div className={styles.div1}>
                <img className={styles.logo} src={logo}/>
                <p className={styles.p}>The Learning Tree</p>
            </div>
            </Link>
            <button className={styles.button} onClick={()=> setOpen1(!open1)}>
                {!open1 && <BookSearch color="#000000" size={55}/>}
                {open1 && <BookOpenText color="#000000" size={55}/>}
                
            </button>

            <div className={styles.div2}>
                <button className={styles.drop} onClick={()=> setOpen2(!open2)}>
                    {!open2 && <ChevronDown color="#000000"/>}
                    {open2 && <ChevronUp color="#000000"/>}
                    Guest User
                </button>
                <CircleUserRound color="#000000" size={65}/>
            </div>
        </nav>
    );
}
export default Navbar;
