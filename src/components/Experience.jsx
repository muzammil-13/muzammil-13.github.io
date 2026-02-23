import React from 'react';

const experiences = [
    {
        role: "Application Developer",
        company: "IBM",
        duration: "Aug 2025 - Present",
        location: "Bengaluru, Karnataka, India (Hybrid)",
        description: "Contributing to the Automated Adjudication (AA) track by streamlining claims processing and data reporting for a major US Healthcare client. Bridging the gap between legacy mainframe systems and modern automation.",
        highlights: [
            "Automation & Scripting: Developed Python scripts in Spyder IDE to automate Daily MTD reporting and stakeholder email distributions.",
            "Data Engineering: Managed high-volume data extraction/cleaning using Teradata SQL, MS Access, and Excel.",
            "Mainframe Operations: Executed and validated automated adjudication workflows using JCL, ensuring accuracy in high-volume processing.",
            "Pend Analysis: Conducted daily analysis to identify transaction bottlenecks for smoother straight-through processing."
        ],
        skills: ["Python", "Teradata SQL", "Automation", "Data Engineering"]
    },
    {
        role: "Technical Representative Intern",
        company: "IBM",
        duration: "Jun 2025 - Present",
        location: "On-site",
        description: "Gained enterprise IT Service Management (ITIL4) & Application Monitoring exposure.",
        highlights: [],
        skills: ["IT Infrastructure", "Application Monitoring", "ITSM"]
    },
    {
        role: "Business Operations & IT Associate",
        company: "Family Run Business House",
        duration: "Jan 2024 - May 2025",
        location: "Erattupetta, Kerala, India",
        description: "Operated at the intersection of retail operations and technology, identifying friction points in small business workflows and solving them with digital tools. Shaped vision for Retail-Tech SaaS products.",
        highlights: [
            "Digital Transformation: Digitized manual workflows by implementing Payment tracking, reducing cash discrepancies.",
            "Systems & Compliance: Managed ERP invoicing and GST compliance for a furniture manufacturing unit.",
            "Operational Efficiency: Optimized inventory flow and closed stock-to-billing gaps.",
            "IT Infrastructure: Sole IT Lead managing hardware, local networking, and zero downtime."
        ],
        skills: ["Business Operations", "ERP", "IT Infrastructure"]
    },
    {
        role: "Web Developer & OSS Contributor",
        company: "Freelance",
        duration: "Oct 2024 - Mar 2025",
        location: "Remote",
        description: "Delivering responsive, SEO-optimized web solutions for SMBs.",
        highlights: [
            "Delivered websites for SMBs (Flora Boutique, Cakeberries).",
            "Contributed to OHC Care (Django-React healthcare platform).",
            "Built ExamInsights (AI exam analysis tool) with Streamlit + RAG."
        ],
        skills: ["React", "Django", "Streamlit", "RAG"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-roseTaupe/5 to-transparent pointer-events-none -z-10 dark:from-roseTaupe/10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title text-center mb-16" data-aos="fade-up">💼 Experience</h2>

                <div className="space-y-12 max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative pl-8 md:pl-0"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
