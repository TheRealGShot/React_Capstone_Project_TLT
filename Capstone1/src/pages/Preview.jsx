import styles from '../styles/pages/Preview.module.css';
function Preview(){
    return(
        <div className={styles.desktop}>
            <div className={styles.box}>
                <div className={styles.flexor1}>
                    <div className={styles.flexor2}> 
                        <h1 className={styles.h1}>BookTitle</h1>
                        <h1 className={styles.h1}>By: AuthorName</h1>
                        <h1 className={styles.h1}>Published: Date</h1>
                    </div>
                    <div className={styles.flexor2}>
                    <p className={styles.p}>Description:</p>
                        <div className={styles.flexor3}>
                            <p className={styles.p}>Description Giberishe ffkwherh
                                e hrgw irjtgo ijer  oit jhoie jrthyety
                                wr thwtr yje tyjety jet yjwy5j ewtyj
                                wt yjet yj5yjw rhw5y5jw5 yhjwt5y5jwy
                                jwy jwr tyhj w5yjw5yj wyjwy jhwy
                                jwryy jw rte tuujfgb sfgj
                                ryujetyh qwrthyw5rj etyj56 6hjw4thw
                                th4thw4 6hw4t 6hjw5 ry hj5yj5 yj5yjhw5
                                hwt rh whwty hwtrjw5y 5jw55yjw5y jhw5t
                            </p>
                        </div>
                    </div>
                </div>
                <button className={styles.button}>
                    Borrow Now!
                </button>
            </div>
        </div>
    );
}
export default Preview;
