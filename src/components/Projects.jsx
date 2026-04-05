import React from 'react';
import { motion } from 'framer-motion';

const projectsList = [
    {
        title: "ExamInsights.ai",
        description: "ExamInsight is a RAG application designed to analyze previous exam question papers and identify common question patterns. This tool aims to help students prepare more effectively for their exams.",
        link: "https://github.com/muzammil-13/ExamInsights_app",
        tags: ["Streamlit", "RAG", "LLM", "Python"],
        span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2", // Large Featured
        delay: 0.1,
        featured: true,
        icon: "fa-brain"
    },
    {
        title: "AirBnB Clone",
        description: "A full-stack clone of AirBnB built using the MERN stack. Features user authentication, property listings, and booking management.",
        link: "https://github.com/muzammil-13/airbnb-clone",
        tags: ["React", "Node.js", "MongoDB"],
        span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2", // Tall Featured
        delay: 0.2,
        featured: true,
        icon: "fa-house-user"
    },
    {
        title: "Retail Ops Tools",
        description: "MVP automating retail operations for family business. Streamlines inventory management and order processing.",
        link: "https://github.com/muzammil-13",
        tags: ["Python", "Automation", "ERP"],
        span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
        delay: 0.3,
        featured: false,
        icon: "fa-cash-register"
    },
    {
        title: "Airbnb Support Bot",
        description: "An intelligent chatbot built with Next.js, React, and OpenAI API to provide instant support assistance.",
        link: "https://github.com/muzammil-13/airbnb-bot",
        tags: ["Next.js", "React", "OpenAI"],
        span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1",
        delay: 0.4,
        featured: false,
        icon: "fa-robot"
    },
    {
        title: "Bitcoin Predictor",
        description: "A data-driven project leveraging machine learning to predict Bitcoin 30-day price trends.",
        link: "https://github.com/muzammil-13/data_analysis-inmakes",
        tags: ["Machine Learning", "Data Analysis"],
        span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
        delay: 0.5,
        featured: false,
        icon: "fa-chart-line"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Decals */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-mikadoYellow/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="section-title text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    🚀 <span className="gradient-text">Featured</span> Projects
                </motion.h2>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {projectsList.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`card group hover:border-mikadoYellow/30 flex flex-col justify-between relative overflow-hidden ${project.span}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: project.delay }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-mikadoYellow/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative z-10 h-full flex flex-col">

                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${project.featured ? 'bg-mikadoYellow/10 text-mikadoYellow dark:bg-mikadoYellow/20' : 'bg-gray-100 text-gray-500 dark:bg-gray-800'}`}>
                                        <i className={`fas ${project.icon} text-xl`}></i>
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mikadoYellow transition-colors" aria-label="Github link">
                                        <i className="fab fa-github text-2xl"></i>
                                    </a>
                                </div>

                                <div>
                                    <h3 className={`font-bold mb-3 group-hover:text-mikadoYellow transition-colors ${project.featured ? 'text-2xl text-numberText dark:text-white' : 'text-xl text-gray-800 dark:text-gray-200'}`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800/50">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 dark:bg-gray-800/80 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <a href="https://github.com/muzammil-13?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-secondary group">
                        <i className="fab fa-github mr-2 group-hover:animate-bounce"></i> Browse All Repositories
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
