import React, { useState } from 'react'
import styles from './contact.module.css'

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

    formData.append("access_key", "d04ea962-fd3d-457f-a3bb-485fb027943b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
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

    setData({
      name: '',
      email: '',
      message: ''
    })
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
      </div>

      <div className={styles.contactrgt}></div>
    </main>
  )
}

export default Contact
