import React from 'react';
import ContactCard from '../components/ContactCard';
import styles from './contact.module.css';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>I am Contact Page </h1>
                <ContactCard />
                <section className={styles.contact_section}>
                    <h2>We&apos;d love to hear <span> from you</span></h2>
                    <ContactForm />
                </section>

            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29221.881361228458!2d90.3558965317907!3d23.72114951462747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf2ad0dff901%3A0xa72cc676b553705!2sKamrangirchar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1685820131009!5m2!1sen!2sbd" width={600} height={450} style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
        </>
    );
};

export default Contact;