import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Frontend Development",
        icon: "fa-laptop-code",
        span: "col-span-1 md:col-span-2 row-span-2", // Featured wide bento box
        delay: 0.1,
        skills: [
            { name: "React", icon: "fab fa-react" },
            { name: "Next.js", icon: "" },
            { name: "Tailwind CSS", icon: "fab fa-css3" },
            { name: "Bootstrap", icon: "fab fa-bootstrap" },
            { name: "MUI", icon: "" },
            { name: "Flutter", icon: "" }
        ]
    },
    {
        title: "Backend Development",
        icon: "fa-server",
        span: "col-span-1 row-span-2",
        delay: 0.2,
        skills: [
            { name: "Django", icon: "" },
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Express.js", icon: "" },
            { name: "Flask", icon: "" }
        ]
    },
    {
        title: "Programming",
        icon: "fa-code",
        span: "col-span-1 row-span-1",
        delay: 0.3,
        skills: [
            { name: "Python", icon: "fab fa-python" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "HTML5/CSS3", icon: "fab fa-html5" },
            { name: "Bash", icon: "fas fa-terminal" }
        ]
    },
    {
        title: "Cloud & DB",
        icon: "fa-cloud",
        span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1",
        delay: 0.4,
        skills: [
            { name: "GCP", icon: "" },
            { name: "Firebase", icon: "" },
            { name: "MongoDB", icon: "" },
            { name: "Supabase", icon: "" }
        ]
    },
    {
        title: "DevOps & Tools",
        icon: "fa-tools",
        span: "col-span-1 lg:col-span-1 row-span-1",
        delay: 0.5,
        skills: [
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Terraform", icon: "" },
            { name: "Postman & Figma", icon: "" }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-gray-50/50 dark:bg-black/80 relative overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-mikadoYellow/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-roseTaupe/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="section-title text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    🛠️ Tech Stack & <span className="gradient-text">Arsenal</span>
                </motion.h2>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className={`card group hover:border-mikadoYellow/30 relative overflow-hidden ${category.span}`}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: category.delay }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            {/* Subtle gradient hover effect for Bento boxes */}
                            <div className="absolute inset-0 bg-gradient-to-br from-mikadoYellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative z-10 h-full flex flex-col">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-numberText dark:text-gray-200">
                                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-mikadoYellow shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <i className={`fas ${category.icon}`}></i>
                                    </div>
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-2.5 mt-auto">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="badge bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800"
                                        >
                                            {skill.icon && <i className={`${skill.icon} text-lg`}></i>}
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
