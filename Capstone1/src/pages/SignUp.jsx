import styles from '../styles/pages/SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignUp(){
	const [formData, setFormData] = useState({
		fname: '',
		lname: '',
		email: '',
		confirmEmail: '',
		password: '',
		confirmPassword: ''
	});
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		setError('');
	};

	const handleSignUp = (e) => {
		e.preventDefault();

		// Validate all fields are filled
		if (!formData.fname || !formData.lname || !formData.email || !formData.confirmEmail || !formData.password || !formData.confirmPassword) {
			setError('All fields are required');
			return;
		}

		// Validate email has '@'
		if (!formData.email.includes('@')) {
			setError('Invalid email format');
			return;
		}

		// Validate emails match
		if (formData.email !== formData.confirmEmail) {
			setError('Emails do not match');
			return;
		}

		// Validate passwords match
		if (formData.password !== formData.confirmPassword) {
			setError('Passwords do not match');
			return;
		}

		// Validate password length
		if (formData.password.length < 6) {
			setError('Password must be at least 6 characters');
			return;
		}

		// Check if user already exists
		const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
		if (existingUsers.some(user => user.email === formData.email)) {
			setError('Email already registered');
			return;
		}

		// Create new user
		const newUser = {
			fname: formData.fname,
			lname: formData.lname,
			email: formData.email,
			password: formData.password
		};

		// Store user in localStorage
		existingUsers.push(newUser);
		localStorage.setItem('users', JSON.stringify(existingUsers));
		console.log('User registered successfully:', newUser);
		console.log('All users:', existingUsers);

		// Navigate to login page
		navigate('/login');
	};

	return (
		<div className={styles.desktop}>
			<h1 className={styles.h1}>Welcome to The Learning Tree Library!</h1>
			<div className={styles.box}>
				{error && <p style={{color: 'red', marginBottom: '10px', fontSize:'10px'}}>{error}</p>}
				<form className={styles.form} onSubmit={handleSignUp}>
					<div className={styles.inputBox}>
					<label>First Name</label> 
						<input 
							type="text" 
							name="fname" 
							placeholder='Enter First Name' 
							className={styles.input}
							value={formData.fname}
							onChange={handleChange}
						/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Last Name</label> 
						<input 
							type="text" 
							name="lname" 
							placeholder='Enter Last Name' 
							className={styles.input}
							value={formData.lname}
							onChange={handleChange}
						/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Email</label> 
						<input 
							type="text" 
							name="email" 
							placeholder='Enter Email' 
							className={styles.input}
							value={formData.email}
							onChange={handleChange}
						/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Confirm Email</label> 
						<input 
							type="text" 
							name="confirmEmail" 
							placeholder='Re-Enter Email' 
							className={styles.input}
							value={formData.confirmEmail}
							onChange={handleChange}
						/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Password</label> 
						<input 
							type="text" 
							name="password" 
							placeholder='Enter Password' 
							className={styles.input}
							value={formData.password}
							onChange={handleChange}
						/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Confirm Password</label> 
						<input 
							type="text" 
							name="confirmPassword" 
							placeholder='Re-Enter Password' 
							className={styles.input}
							value={formData.confirmPassword}
							onChange={handleChange}
						/> <br/>
					</div>
					
				</form>
				<p className={styles.p}>Already Have an Account? 
					<Link to='/login'>Login</Link>
				</p>
				<button className={styles.button} onClick={handleSignUp}>
					Sign Up
				</button>
			</div>
		</div>
	);
}
export default SignUp;
