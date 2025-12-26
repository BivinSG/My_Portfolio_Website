import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import profileImg from '../assets/hero-profile.png';

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["React Developer", "Web Developer"];

    useEffect(() => {
        const handleTyping = () => {
            const currentFullText = roles[titleIndex];

            if (isDeleting) {
                // Deleting text
                setCurrentText(currentFullText.substring(0, currentText.length - 1));
                setTypingSpeed(50);
            } else {
                // Typing text
                setCurrentText(currentFullText.substring(0, currentText.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && currentText === currentFullText) {
                // Full text typed, start deleting after pause
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && currentText === '') {
                // Text deleted, move to next title
                setIsDeleting(false);
                setTitleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, titleIndex, typingSpeed, roles]);

    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="subtitle">Hello, I'm</span>
                    <h1 className="title">Bivin S George</h1>
                    <h2 className="role">
                        And I'm a&nbsp;<span className="blue-gradient-text">{currentText}</span>
                        <span className="cursor">|</span>
                    </h2>
                    <p className="description">
                        Passionate Full stack web developer building end-to-end solutions with React and .NET 9.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-outline">View Work</a>
                        <a href="#contact" className="btn btn-highlight">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                                <path d="M20 6H4V18H20V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 6V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 12H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Let’s Talk
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="blob"></div>
                    <div className="blob blob-2"></div>
                    <img src={profileImg} alt="Bivin" className="hero-img" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
