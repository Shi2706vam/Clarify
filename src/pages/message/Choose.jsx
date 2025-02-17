import React from 'react'
import styles from './choose.module.css'

const Choose = () => {
    return (
        <main className={styles.chooseContainer} >
            <div className={styles.chooselft}>
                <h1> Why Choose Us?</h1>
                <ul>
                    <li> General Range:-  Career counseling fees typically range from ₹1,500 to ₹20,000.  (source:- toprankers.com)</li>

                    <li>  For just ₹11, we provide a wide range of services, including personalized one-on-one guidance to help you every step of the way! </li>
                    
                    <li>We don’t guarantee placement, but we ensure you’re on the right track to success! </li>
                </ul>
            </div>
            <div className={styles.choosergt}>
                <h1>₹ 11 <br /> only</h1>
            </div>
        </main>
    )
}

export default Choose
