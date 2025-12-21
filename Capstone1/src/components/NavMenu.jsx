import styles from "../styles/NavMenu.module.css"; 

import { BookPlus } from 'lucide-react';
import { BookUp } from 'lucide-react';
import { Search } from 'lucide-react';
import { LogIn } from 'lucide-react';

import { Link } from 'react-router-dom';

function NavMenu({setOpen1}){
    return (
        <div className={styles.navMenu}>
            <Link to='/addBook' onClick={() => setOpen1 && setOpen1(false)}>
            <button className={styles.button}>
                <BookPlus color="#000000" size={85}/>
                <p>Add A New Book</p>
            </button>
            </Link>
            <Link to ="/returnBook" onClick={() => setOpen1 && setOpen1(false)}>
            <button className={styles.button}>
                <BookUp color="#000000" size={85}/>
                <p>Return A Book</p>
            </button>
            </Link>
            <button className={styles.button}>
                <Search color="#000000" size={85}/>
                <p>Browse</p>
            </button>
            <Link to ="/login" onClick={() => setOpen1 && setOpen1(false)}>
                <button className={styles.button}>
                    <LogIn color="#000000" size={85}/>
                    <p>Log In</p>
                </button>
            </Link>
        </div>
    );
}
export default NavMenu;