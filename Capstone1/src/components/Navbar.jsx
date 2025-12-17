import styles from "../styles/Navbar.module.css";
function Navbar(){
    return(
        <nav className={styles.nav}>

            <div>
                <img/>
                <p>The Learning Tree</p>
            </div>
            <button>
                <></>
            </button>
            <div>
                <p>Guest</p>
                <></>
            </div>
        </nav>
    );
}
export default Navbar;