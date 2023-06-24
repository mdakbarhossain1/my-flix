'use client'

import React from 'react';
import styles from '@/app/contact/contact.module.css';
import { Mulish } from 'next/font/google';
import { useState } from 'react';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})

const ContactForm = () => {

    const [user, setUser]= useState({
        username:"",
        email:"",
        phone:"",
        message:""
    })

    const handleChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setUser((prevUser) => ({...prevUser, [name] : value}));
    }

    const handleSubmit=()=>{

    }




    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                Enter Your Name
                    <input type="text" name="username" id="username" placeholder="Enter Your Name" className={mulish.className} value={user.username} onChange={handleChange} />

                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                Enter Your Email
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" className={mulish.className} value={user.email} onChange={handleChange} />

                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                Enter Your Phone
                    <input type="number" name="phone" id="phone" placeholder="Enter Your Phone" className={mulish.className} value={user.phone} onChange={handleChange} />

                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                Enter Your Message
                    <textarea type="text" name="message" id="message" rows={5} placeholder="Enter Your Message" className={mulish.className} value={user.message} onChange={handleChange} />

                </label>
            </div>
            <div>
                <button type="submit" className={mulish.className}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;