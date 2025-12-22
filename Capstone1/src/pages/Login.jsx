import styles from '../styles/pages/Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import openBook from '../assets/openBook.png'
import { useState } from 'react';

function Login(){
	const [loginData, setLoginData] = useState({
		email: '',
		password: ''
	});
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginData(prev => ({
			...prev,
			[name]: value
		}));
		setError('');
	};

	const handleLogin = (e) => {
		e.preventDefault();

		// Validate fields are filled
		if (!loginData.email || !loginData.password) {
			setError('Email and password are required');
			return;
		}

		// Get users from localStorage
		const users = JSON.parse(localStorage.getItem('users') || '[]');

		// Find matching user
		const user = users.find(u => u.email === loginData.email && u.password === loginData.password);

		if (user) {
			// Store logged in user
			localStorage.setItem('currentUser', JSON.stringify(user));
			// notify other components in the same tab
			window.dispatchEvent(new Event('authChange'));
			// Navigate to home
			navigate('/');
		} else {
			setError('Invalid email or password');
		}
	};

	return (
		<div className={styles.desktop}>
			<h1 className={styles.h1}>Welcome to The Learning Tree Library!</h1>
            <div className={styles.box}>
				<img className={styles.image} src={openBook} alt="Open Book"/>
                <form className={styles.form} onSubmit={handleLogin}>
					<label>Email</label> 
					<input 
						type="text" 
						name="email" 
						placeholder='Enter Email' 
						className={styles.input}
						value={loginData.email}
						onChange={handleChange}
					/> <br/>
					<label>Password</label>
					<input 
						type="password" 
						name="password" 
						placeholder='Enter Password' 
						className={styles.input}
						value={loginData.password}
						onChange={handleChange}
					/> <br/>
					{error && <p style={{color: 'red', marginBottom: '60px', marginTop:'10px'}}>{error}</p>}
            	</form>
				<p className={styles.p}>Don't have an account? 
					<Link to='/signup'>Sign Up</Link>
				</p>
				<button className={styles.button} onClick={handleLogin}>
					Login
				</button>
            </div>

		</div>
	);
}
export default Login;
