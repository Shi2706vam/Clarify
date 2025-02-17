import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <aside className={styles.logo} onClick={() => scrollToSection('home')}>
                    <img src="src/assets/home.svg" alt="" />
                    <h1>CLARIFY</h1>
                </aside>
                <ul className={styles.navlinks}>
                    
                    <li>
                        <button onClick={() => scrollToSection('home')}>Home</button>
                        </li>
                    <li>
                        <button onClick={() => scrollToSection('services')}>Services</button>
                        </li>
                    <li>
                        <button onClick={() => scrollToSection('whyus')}>Why Us</button>
                        </li>
                    <li>
                        <button onClick={() => scrollToSection('contact')}>Contact</button>
                        </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
