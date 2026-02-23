import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title text-center" data-aos="fade-up">🧩 Who I Am</h2>

                <div className="grid grid-cols-1 gap-12">
                    <div className="space-y-8" data-aos="fade-right">

                        <div className="bg-white dark:bg-cardBgDark p-6 rounded-xl shadow-sm border border-transparent dark:border-gray-800">
                            <p className="text-lg mb-4">
                                I'm a self-taught full-stack developer driven by grit and purpose. From internships to open source to community-driven learning, I'm building toward launching impactful SaaS products.
                            </p>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-xl">💻</span> Python, JavaScript, React, Node.js, Django
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-xl">☁️</span> GCP, Firebase, REST APIs, GitHub
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-xl">🔍</span> Focus: SaaS MVPs, System Design, DevOps Basics
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="card">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-mikadoYellow">
                                    <i className="fas fa-rocket"></i> Current Focus
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Currently, I'm focused on frontend development (React.js) while exploring SaaS ideas to build scalable, market-driven products. My journey includes completing a Python full-stack internship, contributing to various freelance projects, and deep-diving into cloud computing, DevOps, and AI applications.
                                </p>
                            </div>

                            <div className="card">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-roseTaupe">
                                    <i className="fas fa-heart"></i> Beyond Tech
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    I'm a fitness enthusiast, creative storyteller, and digital content creator, with a keen interest in photography, videography, and research. I also run curated knowledge-sharing channels on WhatsApp and Telegram.
                                </p>
                            </div>

                            <div className="card md:col-span-2">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-rawUmber">
                                    <i className="fas fa-mountain"></i> Long-term Vision
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    My long-term goal is to build a tech-driven business, achieve financial independence, and eventually transition to a peaceful life—perhaps in farming or writing. Above all, I aim to create something meaningful that stands the test of time.
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                            <p className="text-xl font-medium mb-6">Let's connect and build something great! 🚀</p>
                            <a
                                href="https://docs.google.com/document/d/e/2PACX-1vRRo4vtXiG-Ov-51f0rHwTj2WtKZ32i1JaIsLK3RGKystyJgvP2kfj9s7D_01RPl-FDVydfs_EdjKZS/pub"
                                className="btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-file-alt mr-2"></i> View My Resume
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-20 max-w-4xl mx-auto px-4 text-center py-12 bg-gray-50 dark:bg-cardBgDark rounded-2xl shadow-sm border border-transparent dark:border-gray-800" data-aos="fade-up">
                <p className="text-2xl italic mb-4 font-semibold text-numberText dark:text-white">
                    "Grit, faith, and consistency over hype."
                </p>
                <p className="text-lg text-roseTaupe font-medium">
                    I build slow, strong, and intentional — inch by inch.
                </p>
            </div>
        </section>
    );
};

export default About;
