import React from 'react'
import styles from './footer.module.css'
import logo from '../../assets/home.svg'

const Footer = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className={styles.footerContainer}>

            <div className={styles.footertop}>
                <span>All rights are reserved by @</span>
                <div onClick={() => scrollToSection('home')}>
                    <img src={logo} />
                    <h1>CLARIFY</h1>
                </div>
            </div>

            <div className={styles.footerbottom}>
                <span>developed by</span>
                <a href="www.linkedin.com/in/shivam-kumar-7a34a81b9">Shivam Kumar</a>
            </div>

        </footer>
    )
}

export default Footer
