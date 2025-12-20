import styles from "../styles/NavMenu.module.css"; 

import { BookPlus } from 'lucide-react';
import { BookUp } from 'lucide-react';
import { Search } from 'lucide-react';
import { LogIn } from 'lucide-react';

import { Settings } from 'lucide-react';

function NavMenu(){
    return (
        <div className={styles.navMenu}>
            <button className={styles.button}>
                <BookPlus color="#000000" size={85}/>
                <p>Add A New Book</p>
            </button>
            <button className={styles.button}>
                <BookUp color="#000000" size={85}/>
                <p>Return A Book</p>
            </button>
            <button className={styles.button}>
                <Search color="#000000" size={85}/>
                <p>Browse</p>
            </button>
            <button className={styles.button}>
                <LogIn color="#000000" size={85}/>
                <p>Log In</p>
            </button>
        </div>
    );
}
export default NavMenu;