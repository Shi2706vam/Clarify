import React from 'react'
import styles from './services.module.css'

const Services = () => {
  return (
    <main className={styles.serviceContainer}>
        <div className={styles.serviceshape1}>
        <div className={styles.serviceshape2}></div>
        </div>

        <div className={styles.servicelft }>
            <img src="src/assets/service.svg" alt="" />
        </div>

        <div className={styles.servicergt}>
            <h1>Our Offerings</h1>
            <div className={styles.servicergt_lst}>
                <div><h1>1</h1></div>
                <ul>
                    <li> LinkedIn Job Search Optimization – Learn how to use filters, keywords, and networking to find the right job.</li>
                    <li> Resume Building & Optimization – Create a compelling, ATS-friendly resume that stands out.</li>
                    <li>Interview Training & Mock Sessions – Master the art of answering tough questions confidently</li>
                </ul>
            </div>

            <div className={styles.servicergt_lst}>
                <div><h1>2</h1></div>
                <ul>
                    <li> Cold Email & Outreach Strategy – Learn how to craft effective emails to hiring managers and recruiters.</li>
                    <li> One-on-One Doubt Clearing – Personalized career guidance to resolve individual concerns.</li>
                    <li>Exclusive Contacts – Get access to email addresses of key decision makers in top companies.</li>
                </ul>
            </div>
            <div></div>
        </div>
    </main>
  )
}

export default Services
