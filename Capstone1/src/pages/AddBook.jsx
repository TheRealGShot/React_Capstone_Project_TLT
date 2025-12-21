import styles from '../styles/pages/AddBook.module.css';
function AddBook(){
    return(
        <div className={styles.desktop}>
			<h1 className={styles.h1}>Want To Add A Book?</h1>
			<div className={styles.box}>
				<form className={styles.form}>
					<div className={styles.inputBox}>
					<label>Book Title</label> 
						<input type="text" name="title" placeholder='Enter Book Title' className={styles.input} 
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Author</label> 
						<input type="text" name="author" placeholder='Enter Author Name' className={styles.input} 
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Date of Publish</label> 
						<input type="date" name="publishDate" className={styles.input} 
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Description</label> 
						<input type="text" name="description" placeholder='Enter Description' className={styles.input} 
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Cover</label> 
						<input type="text" name="cover" placeholder='Enter Cover Image URL' className={styles.input} 
					/> <br/>
					</div>
					<div className={styles.inputBox}>
					<label>Sample Page</label> 
						<input type="text" name="sample" placeholder='Enter Sample Page URL' className={styles.input} 
					/> <br/>
					</div>
				</form>
				
				<button className={styles.button}>
					Add Book
				</button>
			</div>
		</div>
    );
}
export default AddBook;