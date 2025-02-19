import React from 'react'
import styles from './home.module.css'
import home from '../../assets/home.png'

const Home = () => {
    return (
        <main className={styles.heroContainer}>
            <div className={styles.herolft}>
                <h1>About <br /> company</h1>
                <p className={styles.quote}>" Kya karna hai yeh batane wale bahut hai, kya nahi karna woh hum batayenge! "</p>
                <p className={styles.desc}>We are a student consulting company dedicated to helping job seekers navigate the job market with the right approach. Our focus is on practical strategies that actually work, rather than generic career advice.</p>
            </div>
            <div className={styles.herorgt}>
                <img src={home} alt="" />
            </div>
        </main>
    )
}

export default Home
