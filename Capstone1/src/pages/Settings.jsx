import styles from '../styles/pages/Settings.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Settings(){
    const navigate = useNavigate();
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const handleLogOut = () => {
        localStorage.removeItem('currentUser');
        // notify other components in the same tab
        window.dispatchEvent(new Event('authChange'));
        navigate('/');
    };

    const handleDeleteAccount = () => {
        const currentUserRaw = localStorage.getItem('currentUser');
        if (!currentUserRaw) {
            navigate('/');
            return;
        }
        try {
            const currentUser = JSON.parse(currentUserRaw);
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const remaining = users.filter(u => u.email !== currentUser.email);
            localStorage.setItem('users', JSON.stringify(remaining));
        } catch (e) {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            localStorage.setItem('users', JSON.stringify(users || []));
        }
        localStorage.removeItem('currentUser');
        // notify other components in the same tab
        window.dispatchEvent(new Event('authChange'));
        navigate('/');
    };

    const target = isDarkMode ? 'Light Mode' : 'Dark Mode';

    return (
        <div className={`${styles.desktop} ${isDarkMode ? styles.darkMode : ''}`}>
            <h1 className={`${styles.h1} ${isDarkMode ? styles.h1Dark : ''}`}>Settings</h1>
            <div className={`${styles.box} ${isDarkMode ? styles.boxDark : ''}`}>
                <div className={styles.fixBox1}>
                    <div className={styles.fixBox2}>
                        <p className={`${styles.p} ${isDarkMode ? styles.pDark : ''}`}>Switch To: {target} </p>
                        <button className={`${styles.switchOut} ${isDarkMode ? styles.switchOutDark : ''}`} onClick={toggleTheme}>
                            <div className={`${styles.switchIn} ${isDarkMode ? styles.switchInDark : ''}`}></div>
                        </button>
                    </div>
                    <button className={styles.button1} onClick={handleLogOut}>Log Out</button>
                    <button className={styles.button2} onClick={handleDeleteAccount}>Delete Account</button>
                </div>
            </div>
        </div>
    );
}
export default Settings;