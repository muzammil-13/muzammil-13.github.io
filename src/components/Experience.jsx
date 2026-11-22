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
        role: "Business Operations & IT Associate",
        company: "Family Run Business House",
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

                <div className="space-y-12 max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-8 md:pl-0"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Timeline Line (Mobile) */}
                            <div className="md:hidden absolute left-[11px] top-2 bottom-[-48px] w-[2px] bg-gray-200 dark:bg-gray-800 last:hidden"></div>
                            {/* Timeline Dot (Mobile) */}
                            <div className="md:hidden absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-white dark:border-black bg-mikadoYellow z-10"></div>

                            <div className="card group hover:border-mikadoYellow/30 relative">

                                {/* Desktop layout: Split view */}
                                <div className="flex flex-col md:flex-row gap-6">

                                    {/* Left Column: Meta Data */}
                                    <div className="md:w-1/3 shrink-0">
                                        <h3 className="text-xl font-bold text-numberText dark:text-white group-hover:text-mikadoYellow transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg font-medium text-roseTaupe mt-1">{exp.company}</p>

                                        <div className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                            <p className="flex items-center gap-2">
                                                <i className="far fa-calendar-alt w-4 text-center"></i>
                                                {exp.duration}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <i className="fas fa-map-marker-alt w-4 text-center"></i>
                                                {exp.location}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Column: Content */}
                                    <div className="md:w-2/3">
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {exp.highlights.length > 0 && (
                                            <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                                {exp.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <i className="fas fa-angle-right text-mikadoYellow mt-1 shrink-0"></i>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Skills pills */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800/50">
                                            {exp.skills.map((skill, idx) => (
                                                <span key={idx} className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
