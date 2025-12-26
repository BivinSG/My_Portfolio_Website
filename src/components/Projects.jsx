import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My <span className="gradient-text">Projects</span>
                </motion.h2>

                <motion.div
                    className="main-project-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="project-category">Featured Project</h3>
                    <div className="project-card main-project-card">
                        <div className="project-content">
                            <h3>Learning Management System</h3>
                            <p>
                                A comprehensive Learning Management System built with .NET 9 and React.
                                Features secure authentication and developed using Clean Architecture principles to ensure scalability, maintainability, and clear separation of concerns.
                            </p>
                            <div className="project-tags">
                                <span>React</span>
                                <span>.NET 9</span>
                                <span>C#</span>
                                <span>SQL Server</span>
                                <span>Tailwind</span>
                            </div>
                            <div className="project-links">
                                {/* <a href="#" className="project-link">View Live</a> */}
                                <a href="https://github.com/BivinSG/RP2_FinalProjectLMS" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mini-projects-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="project-category">Mini Projects</h3>
                    <div className="projects-grid">
                        <div className="project-card mini-project-card">
                            <div className="project-content">
                                <h3>Gymn App</h3>
                                <p>A fitness application to track workouts and exercises.</p>
                                <div className="project-tags">
                                    <span>React</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://gymn-app-react.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                                    <a href="https://github.com/BivinSG/Gymn_App_React" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card mini-project-card">
                            <div className="project-content">
                                <h3>Weather Dashboard</h3>
                                <p>Real-time weather application using OpenWeatherMap API with location detection.</p>
                                <div className="project-tags">
                                    <span>JavaScript</span>
                                    <span>API</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://weather-app-react-lovat-delta.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                                    <a href="https://github.com/BivinSG/Weather_App_React.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="project-category">Static Sites</h3>
                    <div className="projects-grid">
                        <div className="project-card mini-project-card">
                            <div className="project-content">
                                <h3>Facebook Login Clone</h3>
                                <p>A pixel-perfect static recreation of the Facebook login page built from scratch.</p>
                                <div className="project-tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://bivinsg.github.io/facebooks-static_website/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                                    <a href="https://github.com/BivinSG/facebooks-static_website" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card mini-project-card">
                            <div className="project-content">
                                <h3>Parker Pen Website</h3>
                                <p>A static product showcase website for Parker Pens built from scratch.</p>
                                <div className="project-tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://bivinsg.github.io/Parker-Pen/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                                    <a href="https://github.com/BivinSG/Parker-Pen" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card mini-project-card">
                            <div className="project-content">
                                <h3>Android Static Site</h3>
                                <p>A static website built from scratch showcasing Android concepts.</p>
                                <div className="project-tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                </div>
                                <div className="project-links">
                                    <a href="https://bivinsg.github.io/Android/#" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
                                    <a href="https://github.com/BivinSG/Android" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="github-cta">
                    <p>Check out more of my works</p>
                    <div className="cta-buttons">
                        <a href="https://github.com/bivinsg" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                                <path d="M9 19C9 19 9.5 20 12 20C14.5 20 15 19 15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            GitHub Profile
                        </a>
                        <a href="https://www.linkedin.com/in/bivinsg/" target="_blank" rel="noopener noreferrer" className="btn btn-highlight">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
