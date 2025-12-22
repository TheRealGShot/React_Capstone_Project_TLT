import styles from '../styles/pages/AddBook.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook(){
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

		// Validate all fields are filled
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

		const userKey = cu.email;
		const userAddedBooks = JSON.parse(localStorage.getItem('userAddedBooks') || '{}');
		
		if (!userAddedBooks[userKey]) {
			userAddedBooks[userKey] = [];
		}

		// Generate a unique ID for the added book (base 1000 + index)
		const nextId = 1000 + userAddedBooks[userKey].length;

		const newBook = {
			id: nextId,
			title: formData.title,
			author: formData.author,
			publishDate: formData.publishDate,
			description: formData.description,
			isUserAdded: true
		};

		userAddedBooks[userKey].push(newBook);
		localStorage.setItem('userAddedBooks', JSON.stringify(userAddedBooks));

		// Reset form and navigate to browse
		setFormData({ title: '', author: '', publishDate: '', description: '' });
		navigate('/browse');
	};

	return(
        <div className={styles.desktop}>
			<h1 className={styles.h1}>Want To Add A Book?</h1>
			<div className={styles.box}>
				<form className={styles.form} onSubmit={handleAddBook}>
					<div className={styles.inputBox}>
					<label>Book Title</label> 
						<input type="text" name="title" placeholder='Enter Book Title' className={styles.input} 
							value={formData.title} onChange={handleChange}
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Author</label> 
						<input type="text" name="author" placeholder='Enter Author Name' className={styles.input} 
							value={formData.author} onChange={handleChange}
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Date of Publish</label> 
						<input type="date" name="publishDate" className={styles.input} 
							value={formData.publishDate} onChange={handleChange}
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Description</label> 
						<input type="text" name="description" placeholder='Enter Description' className={styles.input} 
							value={formData.description} onChange={handleChange}
					/> <br/>
					</div>
					{error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}
				</form>
				
				<button className={styles.button} onClick={handleAddBook}>
					Add Book
				</button>
			</div>
		</div>
    );
}
export default AddBook;