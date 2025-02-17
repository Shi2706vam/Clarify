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

                <span>All rights are reserved by @</span>
                <div onClick={() => scrollToSection('home')}>
                    <img src={logo} />
                    <h1>CLARIFY</h1>
                </div>

        </footer>
    )
}

export default Footer
