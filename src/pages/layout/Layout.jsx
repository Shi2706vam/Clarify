import React from 'react'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Services from '../services/Services'
import Choose from '../message/Choose'
import Contact from '../contact/Contact'
import Home from '../home/Home'
import Footer from '../footer/Footer';

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      {/* <Outlet /> */}
      <section id="home" >
        <Home />
      </section>

      <section id="services" >
        <Services />
      </section>

      <section id="whyus" >
        <Choose />
      </section>

      <section id="contact" >
        <Contact />
      </section>
    
      <Footer />
      
    </div>
  )
}

export default Layout
