import React, { useState } from 'react'
import styles from './navbar.module.css'
import logo from '../assets/home.png'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [menu, setmenu] = useState(false);

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
                    <img src={logo} />
                    <h1>CLARIFY</h1>
                </aside>
                <ul className={menu ? styles.open : styles.navlinks}>

                    <li>
                        <button onClick={() => {
                            scrollToSection('home')
                            setmenu(false)
                        }}>Home</button>
                    </li>
                    <li>
                        <button onClick={() => {
                            scrollToSection('services')
                            setmenu(false)
                        }}>Services</button>
                    </li>
                    <li>
                        <button onClick={() => {
                            scrollToSection('whyus')
                            setmenu(false)
                        }}>Why Us</button>
                    </li>
                    <li>
                        <button onClick={() => {
                            scrollToSection('contact')
                            setmenu(false)
                        }}>Contact Us</button>
                    </li>
                </ul>

                <div onClick={() => { setmenu(!menu) }} className={styles.bar}>
                    {menu ? <ImCross /> : <FaBars />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
