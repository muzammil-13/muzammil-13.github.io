import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "DataOps Analyst",
        company: "IBM",
        duration: "Current",
        location: "Bengaluru, Karnataka, India (Hybrid)",
        description: "Support data operations for IBM Healthcare Claims, combining Python automation, SQL-based reconciliation, mainframe batch operations, and production support.",
        highlights: [
            "Built Python automation for month-to-date reporting and stakeholder email distribution.",
            "Led reconciliation and business-rule validation for a Teradata-to-Snowflake migration, achieving approximately 98% parity.",
            "Use SQL and reporting tools to extract, reconcile, and validate healthcare claims data.",
            "Execute and validate adjudication batch workflows using JCL, and analyze daily pend data to support operations.",
            "Modernized mainframe job monitoring through z/OSMF REST APIs, with validation across 137+ jobs."
        ],
        skills: ["Python", "SQL", "z/OS", "Data Validation", "REST APIs"]
    },
    {
        role: "Technical Representative Intern",
        company: "IBM India CIC",
        duration: "2025",
        location: "India",
        description: "Joined IBM India CIC and began contributing to enterprise healthcare claims operations and technology.",
        highlights: [],
        skills: ["Enterprise Technology", "Healthcare Claims", "Operations"]
    },
    {
        role: "Business Operations & IT Associate",
        company: "Family Business",
        duration: "Jan 2024 - May 2025",
        location: "Erattupetta, Kerala, India",
        description: "Supported day-to-day business operations and IT, applying practical systems and process improvements across retail and manufacturing workflows.",
        highlights: [
            "Introduced digital payment tracking to replace manual tracking workflows.",
            "Managed ERP invoicing and GST-related processes for a furniture manufacturing unit.",
            "Supported inventory workflows, business hardware, and local network operations."
        ],
        skills: ["Business Operations", "ERP", "Workflow Improvement", "IT Support"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-roseTaupe/5 to-transparent pointer-events-none -z-10 dark:from-roseTaupe/10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="section-title text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Experience
                </motion.h2>

                <div className="space-y-5 max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {index < experiences.length - 1 && (
                                <div className="absolute left-[11px] top-8 bottom-[-20px] w-[2px] bg-gray-200 dark:bg-gray-800" aria-hidden="true"></div>
                            )}
                            <div className="absolute left-0 top-5 z-10 h-6 w-6 rounded-full border-4 border-white bg-mikadoYellow dark:border-black" aria-hidden="true"></div>

                            <div className="card group p-5 hover:border-mikadoYellow/30">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-numberText dark:text-white group-hover:text-mikadoYellow transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="font-medium text-roseTaupe">{exp.company}</p>
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 sm:text-right">
                                        <p>{exp.duration}</p>
                                        <p>{exp.location}</p>
                                    </div>
                                </div>
                                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {exp.description}
                                </p>

                                <details className="mt-4 border-t border-gray-100 pt-3 dark:border-gray-800/50">
                                    <summary className="cursor-pointer text-sm font-semibold text-roseTaupe hover:text-mikadoYellow dark:text-gray-300">
                                        Role highlights and skills
                                    </summary>
                                    {exp.highlights.length > 0 && (
                                        <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                            {exp.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <i className="fas fa-angle-right text-mikadoYellow mt-1 shrink-0"></i>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {exp.skills.map((skill, idx) => (
                                            <span key={idx} className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </details>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
