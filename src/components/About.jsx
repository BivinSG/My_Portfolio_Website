import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import aboutImg from '../assets/about-image.jpg';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p>
                            Hello! I'm Bivin — a Pianist and a Passionate Web Developer based in Kerala, India. I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out experimenting with HTML & CSS was pretty fun!
                            <br />
                            <br />
                            Fast-forward to today, and I've had the privilege of working on various projects. My main focus now is building accessible, inclusive products and digital experiences for a wide range of clients.
                        </p>
                        <div className="skills">
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">HTML5</span>
                            <span className="skill-tag">CSS3</span>
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">UI/UX</span>
                        </div>
                    </motion.div>
                    <motion.div
                        className="about-img"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="img-card">
                            <img src={aboutImg} alt="Bivin" className="about-photo" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
