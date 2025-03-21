import React, { useState } from 'react'
import styles from './contact.module.css'
import Swal from 'sweetalert2'
import { CiMail } from "react-icons/ci";

const Contact = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7546fa98-1024-4e53-9c29-f9d8fd89994d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Amazing!",
        text: "Message Sent",
        icon: "success",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });

      setData({
        name: '',
        email: '',
        message: ''
      })

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }


  };

  return (
    <main className={styles.contactContainer} >
      <div className={styles.contactlft}>
          <form onSubmit={onSubmit}>
            <h2>Contact Us</h2>
            <div className={styles.inputbox}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className={styles.field}
                placeholder='Enter your name'
                name='name'
                value={data.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputbox}>
              <label>Email Address</label>
              <input
                type="email"
                className={styles.field}
                placeholder='Enter your email'
                name='email'
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputbox}>
              <label>Your Message</label>
              <textarea
                name='message'
                placeholder='Enter your message'
                value={data.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit'>Send Message</button>
          </form>
          <div className={styles.mailbox}>
            <h2 className={styles.mailContent}>Contact us at</h2>
            <a href="mailto:infoclarify.ai@gmail.com"><CiMail/> infoclarify.ai@gmail.com</a>
          </div>

      </div>

      <div className={styles.contactrgt}></div>
    </main>
  )
}

export default Contact
