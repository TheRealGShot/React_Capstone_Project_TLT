import styles from '../styles/pages/AddBook.module.css';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext.jsx';

function AddBook(){
	const { isDarkMode } = useContext(ThemeContext);
	const [formData, setFormData] = useState({
		title: '',
		author: '',
		publishDate: '',
		description: ''
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

	function getCurrentUser() {
		try {
			return JSON.parse(localStorage.getItem('currentUser')) || null;
		} catch (e) { return null; }
	}

	const handleAddBook = (e) => {
		e.preventDefault();

		if (!formData.title || !formData.author || !formData.publishDate || !formData.description) {
			setError('All fields are required');
			return;
		}

		const cu = getCurrentUser();
		if (!cu) {
			setError('You must be logged in to add a book');
			navigate('/login');
			return;
		}

		const globalAddedBooks = JSON.parse(localStorage.getItem('globalAddedBooks') || '[]');
		
		const maxId = globalAddedBooks.length > 0 ? Math.max(...globalAddedBooks.map(b => b.id)) : 999;
		const nextId = maxId + 1;

		const newBook = {
			id: nextId,
			title: formData.title,
			author: formData.author,
			publishDate: formData.publishDate,
			description: formData.description,
			isUserAdded: true
		};

		globalAddedBooks.push(newBook);
		localStorage.setItem('globalAddedBooks', JSON.stringify(globalAddedBooks));

		setFormData({ title: '', author: '', publishDate: '', description: '' });
		navigate('/browse');
	};

	return(
        <div className={`${styles.desktop} ${isDarkMode ? styles.darkMode : ''}`}>
			<h1 className={`${styles.h1} ${isDarkMode ? styles.darkMode : ''}`}>Want To Add A Book?</h1>
			<div className={`${styles.box} ${isDarkMode ? styles.darkMode : ''}`}>
				<form className={`${styles.form} ${isDarkMode ? styles.darkMode : ''}`} onSubmit={handleAddBook}>
					<div className={styles.inputBox}>
					<label>Book Title</label> 
						<input type="text" name="title" placeholder='Enter Book Title' className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
							value={formData.title} onChange={handleChange}
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Author</label> 
						<input type="text" name="author" placeholder='Enter Author Name' className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
							value={formData.author} onChange={handleChange}
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Date of Publish</label> 
						<input type="date" name="publishDate" className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
							value={formData.publishDate} onChange={handleChange}
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Description</label> 
						<input type="text" name="description" placeholder='Enter Description' className={`${styles.input} ${isDarkMode ? styles.darkMode : ''}`}
							value={formData.description} onChange={handleChange}
					/> <br/>
					</div>
					{error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}
				</form>
				
				<button className={`${styles.button} ${isDarkMode ? styles.darkMode : ''}`} onClick={handleAddBook}>
					Add Book
				</button>
			</div>
		</div>
    );
}
export default AddBook;