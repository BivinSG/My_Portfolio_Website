import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import qrCode from '../assets/contact-qr.png';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <motion.div
                className="contact-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div>
                    <h2 className="qr-title">Get in <span className="gradient-text">Touch</span></h2>
                    <p className="qr-subtitle">Scan to connect with me directly</p>
                </div>

                <div className="qr-image-container">
                    <img src={qrCode} alt="Contact QR Code" className="qr-image" />
                </div>

                <p className="contact-text">
                    Use your phone camera to scan the QR code
                </p>
            </motion.div>
        </section>
    );
};

export default Contact;
