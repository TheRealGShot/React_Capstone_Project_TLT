import styles from '../styles/pages/Settings.module.css';

function Settings(){
    return (
        <div className={styles.desktop}>
            <h1 className={styles.h1}>Settings</h1>
            <div className={styles.box}>
                <div className={styles.fixBox1}>
                    <div className={styles.fixBox2}>
                        <p className={styles.p}>Switch To: {} </p>
                        <button className={styles.switchOut}>
                            <div className={styles.switchIn}></div>
                        </button>
                    </div>
                    <button className={styles.button1}>Log Out</button>
                    <button className={styles.button2}>Delete Account</button>
                </div>
            </div>
        </div>
    );
}
export default Settings;