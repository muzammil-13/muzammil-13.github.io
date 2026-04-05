import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    📫 Get In Touch
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">

                    {/* Contact Info */}
                    <motion.div
                        className="lg:col-span-1 space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-numberText dark:text-white">Connect With Me</h3>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://linkedin.com/in/muzammil-ibrahim-pm" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-roseTaupe/10 dark:bg-gray-800 text-numberText dark:text-white hover:text-mikadoYellow dark:hover:text-mikadoYellow hover:-translate-y-1 transition-all text-xl">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/muzammil-13" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-roseTaupe/10 dark:bg-gray-800 text-numberText dark:text-white hover:text-mikadoYellow dark:hover:text-mikadoYellow hover:-translate-y-1 transition-all text-xl">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://instagram.com/_mzml13" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-roseTaupe/10 dark:bg-gray-800 text-numberText dark:text-white hover:text-mikadoYellow dark:hover:text-mikadoYellow hover:-translate-y-1 transition-all text-xl">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://x.com/_muzammil13" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-roseTaupe/10 dark:bg-gray-800 text-numberText dark:text-white hover:text-mikadoYellow dark:hover:text-mikadoYellow hover:-translate-y-1 transition-all text-xl">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://medium.com/@muzammilibrahim13" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-roseTaupe/10 dark:bg-gray-800 text-numberText dark:text-white hover:text-mikadoYellow dark:hover:text-mikadoYellow hover:-translate-y-1 transition-all text-xl">
                                    <i className="fab fa-medium"></i>
                                </a>
                                <a href="https://discord.gg/739813212022767627" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-roseTaupe/10 dark:bg-gray-800 text-numberText dark:text-white hover:text-mikadoYellow dark:hover:text-mikadoYellow hover:-translate-y-1 transition-all text-xl">
                                    <i className="fab fa-discord"></i>
                                </a>
                            </div>
                        </div>

                        <div>
                            <p className="flex items-center gap-3 text-lg font-medium">
                                <i className="fas fa-envelope text-mikadoYellow text-xl"></i>
                                <a href="mailto:muzammilibrahim13@gmail.com" className="hover:text-mikadoYellow transition-colors">
                                    muzammilibrahim13@gmail.com
                                </a>
                            </p>
                        </div>

                        <a href="https://buymeacoffee.com/muzammil_13" target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2">
                            <i className="fas fa-coffee"></i> Buy Me A Coffee
                        </a>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form action="https://formsubmit.co/muzammilibrahim13@gmail.com" method="POST" className="card space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black focus:border-mikadoYellow focus:ring-2 focus:ring-mikadoYellow/20 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black focus:border-mikadoYellow focus:ring-2 focus:ring-mikadoYellow/20 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message <span className="text-red-500">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black focus:border-mikadoYellow focus:ring-2 focus:ring-mikadoYellow/20 transition-all outline-none resize-y"
                                ></textarea>
                            </div>

                            <input type="hidden" name="_next" value="https://muzammil-13.github.io/" />
                            <input type="hidden" name="_subject" value="New Portfolio Contact" />
                            <input type="text" name="_honey" style={{ display: 'none' }} />

                            <button type="submit" className="w-full md:w-auto btn-primary">
                                Send Message <i className="fas fa-paper-plane ml-2"></i>
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
