import styles from '../styles/pages/ReturnBook.module.css';
function ReturnBook(){
    return(
        <div className={styles.desktop}>
            <h1 className={styles.h1}>Returning A Book?</h1>
            <div className={styles.box}>
                <div className={styles.left}>
     
                        <form className={styles.form3}>
                        <label>Book Title</label> 
                            <input type="text" name="book-title" placeholder='Enter Book Title' className={styles.input} 
                        /> 
                        </form>
               
                    <form className={styles.form1}>
                        <label>Date of Return:</label> 
                            <input type="date" name="date-of-return" placeholder='Enter Date' className={styles.input} 
                        /> 
                    </form>
                    <button className={styles.button}>
                        Return
                    </button>
                </div>
                <div className={styles.right}>
                    <div className={styles.box2}>
                        <p className={styles.p}>I promise that any damage caused to the
                             books will be paid for out of the cost
                              of ones own money.
                        </p>
                    </div>
                    <form className={styles.form2}>
                        <label>Digital Signature</label> 
                            <input type="text" name="signature" placeholder='Enter Signature (Full Name)' className={styles.input} 
                        /> <br/>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ReturnBook;