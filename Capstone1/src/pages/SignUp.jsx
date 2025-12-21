import styles from '../styles/pages/SignUp.module.css';
import { Link } from 'react-router-dom';
function SignUp(){
	return (
		<div className={styles.desktop}>
			<h1 className={styles.h1}>Welcome to The Learning Tree Library!</h1>
			<div className={styles.box}>
				<form className={styles.form}>
					<div className={styles.inputBox}>
					<label>First Name</label> 
						<input type="text" name="fname" placeholder='Enter First Name' className={styles.input} 
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Last Name</label> 
						<input type="text" name="lname" placeholder='Enter Last Name' className={styles.input} 
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Email</label> 
						<input type="text" name="email" placeholder='Enter Email' className={styles.input} 
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Confirm Email</label> 
						<input type="text" name="confirmEmail" placeholder='Re-Enter Email' className={styles.input} 
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Password</label> 
						<input type="text" name="password" placeholder='Enter Password' className={styles.input} 
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Confirm Password</label> 
						<input type="text" name="confirmPassword" placeholder='Re-Enter Password' className={styles.input} 
					/> <br/>
					</div>
				</form>
				<p className={styles.p}>Already Have an Account? 
					<Link to='/login'>Login</Link>
				</p>
				<button className={styles.button}>
					Sign Up
				</button>
			</div>
		</div>
	);
}
export default SignUp;
