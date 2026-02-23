import React from 'react';

const projectsList = [
    {
        title: "🏡 AirBnB Clone",
        description: "A full-stack clone of AirBnB built using the MERN stack. Features include user authentication, property listings, and booking management.",
        link: "https://github.com/muzammil-13/airbnb-clone"
    },
    {
        title: "🤖 Airbnb Support Assistant Chatbot",
        description: "An intelligent chatbot built with Next.js, React, and OpenAI's GPT API to provide instant Airbnb support assistance.",
        link: "https://github.com/muzammil-13/airbnb-bot"
    },
    {
        title: "🔍 ExamInsights.ai",
        description: "ExamInsight is a RAG application designed to analyze previous exam question papers and identify common question patterns. This tool aims to help students prepare more effectively for their exams.",
        link: "https://github.com/muzammil-13/ExamInsights_app"
    },
    {
        title: "📊 Bitcoin Price Prediction Analysis",
        description: "A data-driven project that leverages machine learning to predict Bitcoin price trends. Using historical Bitcoin data, this analysis provides 30-day price forecasts through advanced statistical modeling.",
        link: "https://github.com/muzammil-13/data_analysis-inmakes"
    },
    {
        title: "⚙️ Retail Ops Tools",
        description: "MVP automating retail operations for family business. Streamlines inventory management, order processing, and customer tracking.",
        link: "https://github.com/muzammil-13"
    },
    {
        title: "🔎 LinkedIn Job Apply Automation",
        description: "Python tool to scrape & track fresh jobs using smart URL filters. Helps streamline the job application process.",
        link: "https://github.com/muzammil-13"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title text-center" data-aos="fade-up">⚒️ Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projectsList.map((project, index) => (
                        <div
                            key={index}
                            className="card flex flex-col justify-between"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-rawUmber dark:text-gray-200">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-4">
                                    {project.description}
                                </p>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-mikadoYellow font-medium hover:underline inline-flex items-center gap-2 group w-max"
                            >
                                View Project
                                <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16" data-aos="fade-up">
                    <a filter="projects" href="https://github.com/muzammil-13?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <i className="fab fa-github mr-2"></i> Browse All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
