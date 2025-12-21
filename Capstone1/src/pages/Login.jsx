import styles from '../styles/pages/Login.module.css';
import { Link } from 'react-router-dom';
import openBook from '../assets/openBook.png'
function Login(){
	return (
		<div className={styles.desktop}>
			<h1 className={styles.h1}>Welcome to The Learning Tree Library!</h1>
            <div className={styles.box}>
				<img className={styles.image} src={openBook} alt="Open Book"/>
                <form className={styles.form}>
                <label>Email</label> 
                <input type="text" name="email" placeholder='Enter Email' className={styles.input} 
                /> <br/>
                <label>Password</label>
                <input type="text" name="password" placeholder='Enter Password' className={styles.input}
                /> <br/>
            	</form>
				<p className={styles.p}>Don't have an account? 
					<Link to='/signup'>Sign Up</Link>
				</p>
				<button className={styles.button}>
					Login
				</button>
            </div>

		</div>
	);
}
export default Login;
