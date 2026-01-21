import styles from '../styles/pages/Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import openBook from '../assets/openBook.png'
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Login(){
	const { isDarkMode } = useContext(ThemeContext);
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

		if (!loginData.email || !loginData.password) {
			setError('Email and password are required');
			return;
		}

		const users = JSON.parse(localStorage.getItem('users') || '[]');
		const user = users.find(u => u.email === loginData.email && u.password === loginData.password);

		if (user) {
			localStorage.setItem('currentUser', JSON.stringify(user));
			window.dispatchEvent(new Event('authChange'));
			navigate('/');
		} else {
			setError('Invalid email or password');
		}
	};

	return (
		<div className={`${styles.desktop} ${isDarkMode ? styles.darkMode : ''}`}>
			<h1 className={`${styles.h1} ${isDarkMode ? styles.darkMode : ''}`}>Welcome to The Learning Tree Library!</h1>
			<div className={`${styles.box} ${isDarkMode ? styles.darkMode : ''}`}>
				<img className={`${styles.image} no-invert`} src={openBook} alt="Open Book"/>
                <form className={`${styles.form} ${isDarkMode ? styles.darkMode : ''}`} onSubmit={handleLogin}>
					<label>Email</label> 
					<input 
						type="text" 
						name="email" 
						placeholder='Enter Email' 
						className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
						value={loginData.email}
						onChange={handleChange}
					/> <br/>
					<label>Password</label>
					<input 
						type="password" 
						name="password" 
						placeholder='Enter Password' 
						className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
						value={loginData.password}
						onChange={handleChange}
					/> <br/>
					{error && <p style={{color: 'red', marginBottom: '60px', marginTop:'10px'}}>{error}</p>}
            	</form>
			<p className={`${styles.p} ${isDarkMode ? styles.darkMode : ''}`}>Don't have an account? 
				<Link to='/signup'>Sign Up</Link>
			</p>
			<button className={`${styles.button} ${isDarkMode ? styles.darkMode : ''}`} onClick={handleLogin}>
				</button>
            </div>

		</div>
	);
}
export default Login;
