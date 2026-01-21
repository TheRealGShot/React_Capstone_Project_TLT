import styles from '../styles/pages/SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

function SignUp(){
const { isDarkMode } = useContext(ThemeContext);
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

if (!formData.fname || !formData.lname || !formData.email || !formData.confirmEmail || !formData.password || !formData.confirmPassword) {
setError('All fields are required');
return;
}

if (!formData.email.includes('@')) {
setError('Invalid email format');
return;
}

if (formData.email !== formData.confirmEmail) {
setError('Emails do not match');
return;
}

if (formData.password !== formData.confirmPassword) {
setError('Passwords do not match');
return;
}

if (formData.password.length < 6) {
setError('Password must be at least 6 characters');
return;
}

const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
if (existingUsers.some(user => user.email === formData.email)) {
setError('Email already registered');
return;
}

const newUser = {
fname: formData.fname,
lname: formData.lname,
email: formData.email,
password: formData.password
};

existingUsers.push(newUser);
localStorage.setItem('users', JSON.stringify(existingUsers));

// Navigate to login page
navigate('/login');
};

return (
<div className={`${styles.desktop} ${isDarkMode ? styles.darkMode : ''}`}>
<h1 className={`${styles.h1} ${isDarkMode ? styles.darkMode : ''}`}>Welcome to The Learning Tree Library!</h1>
<div className={`${styles.box} ${isDarkMode ? styles.darkMode : ''}`}>
{error && <p style={{color: 'red', marginBottom: '10px', fontSize:'10px'}}>{error}</p>}
<form className={`${styles.form} ${isDarkMode ? styles.darkMode : ''}`} onSubmit={handleSignUp}>
<div className={styles.inputBox}>
<label>First Name</label> 
<input 
type="text" 
name="fname" 
placeholder='Enter First Name' 
className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
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
className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
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
className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
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
className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
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
className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
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
className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
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
