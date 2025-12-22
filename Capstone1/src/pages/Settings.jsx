import styles from '../styles/pages/Settings.module.css';
import { useNavigate } from 'react-router-dom';

function Settings(){
    const navigate = useNavigate();

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
            // malformed data; attempt best-effort cleanup
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            localStorage.setItem('users', JSON.stringify(users || []));
        }
        localStorage.removeItem('currentUser');
        // notify other components in the same tab
        window.dispatchEvent(new Event('authChange'));
        navigate('/');
    };

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
                    <button className={styles.button1} onClick={handleLogOut}>Log Out</button>
                    <button className={styles.button2} onClick={handleDeleteAccount}>Delete Account</button>
                </div>
            </div>
        </div>
    );
}
export default Settings;